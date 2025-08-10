import mysql, { OkPacket } from "mysql2/promise";

const DB_NAME = "votes";
const TABLE_NAME = "voter";

async function getConnection() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "admin1234",
    multipleStatements: true,
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\``);
  await connection.query(`USE \`${DB_NAME}\``);

  await connection.query(`
    CREATE TABLE IF NOT EXISTS \`${TABLE_NAME}\` (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      age INT NOT NULL,
      voted_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  return connection;
}

export async function GET() {
  const connection = await getConnection();

  try {
    const [rows] = await connection.query(`SELECT * FROM \`${TABLE_NAME}\``);
    await connection.end();
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: unknown) {
    await connection.end();
    if (err instanceof Error) {
      return new Response(
        JSON.stringify({ error: err.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function POST(request: Request) {
  const connection = await getConnection();

  try {
    const body = await request.json();
    const { name, age } = body;

    if (!name || !age) {
      await connection.end();
      return new Response(
        JSON.stringify({ error: "Name and age are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await connection.query(
      `INSERT INTO \`${TABLE_NAME}\` (name, age) VALUES (?, ?)`,
      [name, age]
    );

    await connection.end();
    return new Response(
      JSON.stringify({ message: "Voter added successfully" }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: unknown) {
    await connection.end();
    if (err instanceof Error) {
      return new Response(
        JSON.stringify({ error: err.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function DELETE(request: Request) {
  const connection = await getConnection();

  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      await connection.end();
      return new Response(
        JSON.stringify({ error: "Voter id is required to delete" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const [result] = await connection.query<OkPacket>(
      `DELETE FROM \`${TABLE_NAME}\` WHERE id = ?`,
      [id]
    );

    await connection.end();

    if (result.affectedRows === 0) {
      return new Response(
        JSON.stringify({ error: "No voter found with given id" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ message: "Voter deleted successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: unknown) {
    await connection.end();
    if (err instanceof Error) {
      return new Response(
        JSON.stringify({ error: err.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}