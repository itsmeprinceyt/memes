"use client";
import { useState } from "react";

export default function TailwindMotionExamples() {
  // Create a state for each section to force re-render
  const [slideKey, setSlideKey] = useState(0);
  const [creativeKey, setCreativeKey] = useState(0);
  const [blurKey, setBlurKey] = useState(0);
  const [specialKey, setSpecialKey] = useState(0);
  const [loopKey, setLoopKey] = useState(0);
  const [modularKey, setModularKey] = useState(0);
  const [modifiersKey, setModifiersKey] = useState(0);
  const [propertyKey, setPropertyKey] = useState(0);
  const [interactiveKey, setInteractiveKey] = useState(0);
  const [multipleKey, setMultipleKey] = useState(0);
  const [loopControlKey, setLoopControlKey] = useState(0);
  const [responsiveKey, setResponsiveKey] = useState(0);

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">
        Tailwind Motion Examples
      </h1>
      
      {/* 1. Multiple Slide Variations */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-blue-700">1. Multiple Slide Variations</h2>
          <button 
            onClick={() => setSlideKey(prev => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Replay Animations
          </button>
        </div>
        <div key={slideKey} className="min-h-[50vh] flex flex-col items-center justify-center space-y-8 bg-white p-8 rounded-lg shadow-md">
          <h3 className="motion-preset-slide-up text-xl">Slide Up</h3>
          <h3 className="motion-preset-slide-down text-xl">Slide Down</h3>
          <h3 className="motion-preset-slide-left text-xl">Slide Left</h3>
          <h3 className="motion-preset-slide-right text-xl">Slide Right</h3>
        </div>
      </section>
      
      {/* 2. Creative Motion Presets */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-blue-700">2. Creative Motion Presets</h2>
          <button 
            onClick={() => setCreativeKey(prev => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Replay Animations
          </button>
        </div>
        
        {/* Bouncy and Dynamic Effects */}
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-blue-600">Bouncy and Dynamic Effects</h3>
          <div key={creativeKey} className="min-h-[40vh] flex flex-col items-center justify-center space-y-8 bg-white p-8 rounded-lg shadow-md">
            <h4 className="motion-preset-bounce text-lg">Bouncy entrance!</h4>
            <h4 className="motion-preset-pop text-lg">Pop effect!</h4>
            <h4 className="motion-preset-shake text-lg">Shake animation!</h4>
            <h4 className="motion-preset-wiggle text-lg">Wiggle motion!</h4>
          </div>
        </div>
        
        {/* Scale and Focus Effects */}
        <div>
          <h3 className="text-xl font-medium mb-4 text-blue-600">Scale and Focus Effects</h3>
          <div key={creativeKey + 1} className="min-h-[40vh] flex flex-col items-center justify-center space-y-8 bg-white p-8 rounded-lg shadow-md">
            <h4 className="motion-preset-expand text-lg">Expanding text</h4>
            <h4 className="motion-preset-shrink text-lg">Shrinking text</h4>
            <h4 className="motion-preset-focus text-lg">Focus effect</h4>
            <h4 className="motion-preset-compress text-lg">Compress animation</h4>
          </div>
        </div>
      </section>
      
      {/* 3. Blur Effects */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-blue-700">3. Blur Effects</h2>
          <button 
            onClick={() => setBlurKey(prev => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Replay Animations
          </button>
        </div>
        <div key={blurKey} className="grid grid-cols-2 gap-8 p-8 bg-white rounded-lg shadow-md">
          <h3 className="motion-preset-blur-up flex items-center justify-center text-lg h-32">
            Blur up entrance
          </h3>
          <h3 className="motion-preset-blur-down flex items-center justify-center text-lg h-32">
            Blur down entrance
          </h3>
          <h3 className="motion-preset-blur-left flex items-center justify-center text-lg h-32">
            Blur left entrance
          </h3>
          <h3 className="motion-preset-blur-right flex items-center justify-center text-lg h-32">
            Blur right entrance
          </h3>
        </div>
      </section>
      
      {/* 4. Special Effects */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-blue-700">4. Special Effects</h2>
          <button 
            onClick={() => setSpecialKey(prev => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Replay Animations
          </button>
        </div>
        <div key={specialKey} className="min-h-[50vh] flex flex-col items-center justify-center space-y-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="motion-preset-typewriter-[20] text-xl text-center">
            Hello world! This is a Tailwind Motion page
          </h3>
          <h3 className="motion-preset-confetti text-xl">
            🎉 Celebration time! 🎉
          </h3>
          <h3 className="motion-preset-flomoji text-xl">
            Flowing emoji animation
          </h3>
        </div>
      </section>
      
      {/* 5. Loop Animations */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-blue-700">5. Loop Animations</h2>
          <button 
            onClick={() => setLoopKey(prev => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Replay Animations
          </button>
        </div>
        <div key={loopKey} className="min-h-[40vh] flex flex-col items-center justify-center space-y-8 bg-white p-8 rounded-lg shadow-md">
          <h3 className="motion-preset-pulse text-xl">
            Pulsing continuously
          </h3>
          <h3 className="motion-preset-wobble text-xl">
            Wobbling motion
          </h3>
        </div>
      </section>
      
      {/* 6. Modular Animations */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-blue-700">6. Modular Animations</h2>
          <button 
            onClick={() => setModularKey(prev => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Replay Animations
          </button>
        </div>
        
        {/* Translation and Opacity */}
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-blue-600">Translation and Opacity</h3>
          <div key={modularKey} className="min-h-[30vh] flex items-center justify-center bg-white p-8 rounded-lg shadow-md">
            <h4 className="motion-translate-x-in-50 motion-opacity-in-0 text-lg">
              Custom slide and fade
            </h4>
          </div>
        </div>
        
        {/* Scale and Rotate Combinations */}
        <div>
          <h3 className="text-xl font-medium mb-4 text-blue-600">Scale and Rotate Combinations</h3>
          <div key={modularKey + 1} className="min-h-[40vh] flex flex-col items-center justify-center space-y-8 bg-white p-8 rounded-lg shadow-md">
            <h4 className="motion-scale-in-75 motion-rotate-in-12 text-lg">
              Scale up with rotation
            </h4>
            <h4 className="motion-translate-y-in-100 motion-scale-in-50 text-lg">
              Slide up and scale
            </h4>
          </div>
        </div>
      </section>
      
      {/* 7. Animation Modifiers */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-blue-700">7. Animation Modifiers</h2>
          <button 
            onClick={() => setModifiersKey(prev => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Replay Animations
          </button>
        </div>
        
        {/* Duration and Delay */}
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-blue-600">Duration and Delay</h3>
          <div key={modifiersKey} className="min-h-[30vh] flex flex-col items-center justify-center space-y-8 bg-white p-8 rounded-lg shadow-md">
            <h4 className="motion-preset-fade motion-duration-1000 motion-delay-500 text-lg">
              Slow fade with delay
            </h4>
            <h4 className="motion-preset-slide-up motion-duration-300 text-lg">
              Quick slide up
            </h4>
          </div>
        </div>
        
        {/* Custom Timing Functions */}
        <div>
          <h3 className="text-xl font-medium mb-4 text-blue-600">Custom Timing Functions</h3>
          <div key={modifiersKey + 1} className="min-h-[30vh] flex flex-col items-center justify-center space-y-8 bg-white p-8 rounded-lg shadow-md">
            <h4 className="motion-preset-bounce motion-ease-spring-bouncy text-lg">
              Bouncy spring animation
            </h4>
            <h4 className="motion-preset-slide-right motion-ease-spring-smooth text-lg">
              Smooth spring slide
            </h4>
          </div>
        </div>
      </section>
      
      {/* 8. Property-Specific Modifiers */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-blue-700">8. Property-Specific Modifiers</h2>
          <button 
            onClick={() => setPropertyKey(prev => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Replay Animations
          </button>
        </div>
        <div key={propertyKey} className="min-h-[30vh] flex items-center justify-center bg-white p-8 rounded-lg shadow-md">
          <h3 className="motion-rotate-in-90 motion-opacity-in-0 motion-delay-500/rotate text-lg">
            Rotation delayed, opacity immediate
          </h3>
        </div>
      </section>
      
      {/* 9. Interactive States */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-blue-700">9. Interactive States</h2>
          <button 
            onClick={() => setInteractiveKey(prev => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Replay Animations
          </button>
        </div>
        <div key={interactiveKey} className="min-h-[40vh] flex flex-col items-center justify-center space-y-8 bg-white p-8 rounded-lg shadow-md">
          <h3 className="hover:motion-preset-shake cursor-pointer text-lg transition-all">
            Hover to shake
          </h3>
          <h3 className="focus:motion-preset-pop cursor-pointer text-lg outline-none" tabIndex={0}>
            Focus to pop
          </h3>
          <div className="group p-4 border rounded-lg">
            <h3 className="group-hover:motion-preset-bounce text-lg">
              Group hover bounce
            </h3>
          </div>
        </div>
      </section>
      
      {/* 10. Multiple Animations */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-blue-700">10. Multiple Animations</h2>
          <button 
            onClick={() => setMultipleKey(prev => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Replay Animations
          </button>
        </div>
        <div key={multipleKey} className="min-h-[40vh] flex flex-col items-center justify-center space-y-8 bg-white p-8 rounded-lg shadow-md">
          <h3 className="motion-translate-x-in-50 motion-opacity-in-0 motion-scale-in-75 motion-duration-800 text-lg">
            Multi-property entrance
          </h3>
          <h3 className="motion-preset-slide-up motion-preset-fade motion-delay-300 text-lg">
            Combined presets
          </h3>
        </div>
      </section>
      
      {/* 11. Loop Control */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-blue-700">11. Loop Control</h2>
          <button 
            onClick={() => setLoopControlKey(prev => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Replay Animations
          </button>
        </div>
        <div key={loopControlKey} className="min-h-[40vh] flex flex-col items-center justify-center space-y-8 bg-white p-8 rounded-lg shadow-md">
          <h3 className="motion-preset-bounce motion-loop-once text-lg">
            Bounce once only
          </h3>
          <h3 className="motion-preset-shake motion-loop-twice text-lg">
            Shake twice
          </h3>
          <h3 className="motion-preset-pulse motion-loop-infinite text-lg">
            Pulse infinitely
          </h3>
        </div>
      </section>
      
      {/* 12. Responsive Animations */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-blue-700">12. Responsive Animations</h2>
          <button 
            onClick={() => setResponsiveKey(prev => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Replay Animations
          </button>
        </div>
        <div key={responsiveKey} className="min-h-[30vh] flex items-center justify-center bg-white p-8 rounded-lg shadow-md">
          <h3 className="motion-preset-fade md:motion-preset-slide-right lg:motion-preset-bounce text-lg text-center">
            Responsive animation behavior (changes with screen size)
          </h3>
        </div>
      </section>
    </main>
  );
}