import React, {useEffect} from "react";

const DualSense = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Scroll to top when the component mounts
  // This ensures that when you navigate to this page, it starts at the top
  return (
    <>
      <div className="section__container">
        <h2 className="section__header">Exploring the Power of DualSense</h2>
        <p className="section__subheader">
          The DualSense controller for PlayStation 5 brings gaming to life with
          its innovative features. Here's a quick look at what makes it stand
          out:
        </p>
      </div>

      <div className="w-1/2 container mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <img
            src="https://images.unsplash.com/photo-1691534986134-cac9b2db495f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Console or PC Gaming"
            className="w-full h-auto max-w-2xl rounded-lg shadow-lg mb-8"
          />
          <p className="text-lg  text-gray-700 mb-4">
            When it comes to gaming, the age-old debate of console vs. PC
            continues to spark passionate discussions. Gamers around the world
            often find themselves asking: "Which platform offers the best
            experience?" While both consoles and PCs have their dedicated
            fanbases, each offers unique advantages. In this blog post, we’ll
            break down the key differences to help you decide which platform
            suits your gaming style.
          </p>

          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-semibold">1. Haptic Feedback</p>
            <p className="">
              The DualSense delivers more immersive sensations through haptic
              feedback, simulating real-world textures like driving on different
              surfaces or feeling the impact of a powerful explosion. It goes
              beyond simple vibrations to make every action more tactile.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <p className="text-2xl font-semibold">2. Adaptive Triggers</p>
            <p className="">
              The adaptive triggers adjust resistance based on in-game actions.
              Whether you’re drawing a bow or firing a gun, the resistance
              changes to mimic real-life actions, adding an extra layer of
              realism.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <p className="text-2xl font-semibold">3. Built-in Microphone</p>
            <p className="">
              The DualSense includes a built-in microphone for quick, hands-free
              communication with teammates. No need for a headset during casual
              gaming sessions.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <p className="text-2xl font-semibold">4. Immersive Audio</p>
            <p className="">
              The Tempest 3D AudioTech integration allows you to hear subtle
              details directly from the controller’s built-in speaker, further
              enhancing the gaming experience.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <p className="text-2xl font-semibold">5. Comfort & Design</p>
            <p className="">
              The ergonomic design ensures comfort during long play sessions,
              while the responsive buttons and touchpad offer precise control.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <p className="">
              DualSense is a powerful controller that enhances your gaming
              experience with cutting-edge technology. Whether you're feeling
              the road beneath you or the tension in a fight, it takes immersion
              to the next level.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DualSense;
