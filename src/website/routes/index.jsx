import ButtonComponent from "../components/landing/ButtonComponent";
import CardComponent from "../components/landing/CardComponent";
import FooterComponent from "../components/landing/FooterComponent";
import HeaderComponent from "../components/landing/HeaderComponent";
import InfoComponent from "../components/landing/InfoComponent";
import NumberSVGComponent from "../components/landing/NumberSVGComponent";
import YouTubeVideosComponent from "../components/landing/YouTubeVideosComponent";

import styles from "../components/landing/styles/Landing.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function Home() {
  return (
    <>
      <HeaderComponent name="Elysium" />

      {/* convert styles to tailwind */}
      <div className="pt-[70px]">
        <div className="height-[300px]">
          <div className="CenteredContainer mt-0">
            {/* style="z-index: -100; height: 600px; display: flex; margin-top: -150px; position: absolute;" */}
            <img
              src="/images/landing/background.svg"
              className="absolute z-[-100] mt-[-150px] h-[600px]"
              alt="Uh Oh! Looks like we've failed to load this image! Get better internet."
            />
          </div>

          {/* style="z-index: 1000;"  */}
          <h1 className="balls z-[1000]">Simply the best.</h1>
          <h1 className="smallballs">
            Elysium is the newest entry in Minecraft Clients, and yet it is
            already the most powerful out of all of them.
          </h1>

          <div className="CenteredContainer">
            {/* open https://forum.elysium.wtf/ on new tab */}
            <ButtonComponent
              text="Explore Elysium"
              inactive={true}
              onClick={() => {
                window.open("https://forum.elysium.wtf/", "_blank");
              }}
            />
            <ButtonComponent text="Purchase Now" />
          </div>
        </div>
        <div>
          {/* style="margin-top: 180px;" */}
          <h1 className="sectiontitle mt-[180px]">Explore Elysium</h1>
          <div className="CenteredContainer">
            <NumberSVGComponent numberPathData="M19.5308 126V116.304H19.2428L17.7388 119.856H15.5948L17.8828 114.8H21.5788V126H19.5308Z" />
          </div>
          <div className="MediumGradientText">Develop</div>
          <div className="CenteredContainer">
            {/* style="width: 430px; margin-top: 30px;" */}
            <h1 className="smallballs mt-[30px] w-[430px]">
              When we say adaptable to all users, we mean it. We don’t add any
              useless scripts you might not need, but we give you the ability to
              write your own.
            </h1>
          </div>
          <div className="CenteredContainer">
            <div className="row mt-[150px]">
              {/* style="column-gap: 70px;"  */}
              <div className="column gap-[70px] lg:flex-row flex flex-col items-center">
                <img src="/images/landing/UI.png" className=" h-[300px]"></img>
                <div className="information">
                  <CardComponent
                    image="/images/landing/wrench.svg"
                    title="The complete toolkit for Developers"
                    description="Everything you need to build your scripts exactly how you imagine by using the Lua language"
                  />
                  <CardComponent
                    image="/images/landing/cube.svg"
                    title="Not a developer? Not a problem!"
                    description="Elysium will allow users to write and publish their scripts or use well-known Script Hubs like"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* style="margin-top: 150px;"  */}
          <div className="CenteredContainer mt-[150px]">
            <img
              alt="Uh Oh! Looks like we've failed to load this image!"
              src="/images/landing/secondtabsection.svg"
            />
          </div>
          <div className="MediumGradientText">FaQ</div>
          <div className="CenteredContainer">
            {/* style="width: 430px; margin-top: 30px;" */}
            <h1 className="smallballs mt-[30px] w-[430px]">
              We made developing easy with snappy execution, so you don’t have
              to worry anymore about your instance. If you have some more
              questions you can get answers them below.
            </h1>
          </div>
          <div
            id="lastnumber"
            // style="height: 1400px;"
            className="CenteredContainer h-[1400px]"
          >
            <img
              className="finaltabnumber"
              alt="Uh Oh! Looks like we've failed to load this image!"
            />
            {/* style="position: absolute; margin-right: 875px; margin-top: 100px; width: 400px;" */}
            <div className="absolute mr-[875px] mt-[100px] w-[400px]">
              <h2>
                I am a Roblox script developer, do I need to learn a new
                language?
              </h2>
              <h3>
                With Elysium, such a thing is completely un needed and
                unrequired! Our scripting API is almost the same as
                Roblox&apos;s if not the exact same, meaning that if you have a
                script that works in Roblox, you won&apos;t need to change many
                things to make it work in Minecraft, many a few lines of code
                max. We also will have an in-depth explanation of our scripting
                API and also UI libraries, helpful scripts and more on{" "}
                <a href="https://minecraftscripts.com/">here.</a>
              </h3>
            </div>
            {/* style="position: absolute; margin-left: 1050px; margin-top: 515px; width: 400px;" */}
            <div className="absolute ml-[1050px] mt-[515px] w-[400px]">
              <h2>Not a developer? Not a problem!</h2>
              <h3>
                There are multiple script hubs planning on adding Minecraft
                support to their script for example{" "}
                <a href="https://discord.gg/aDrVHN88">Equity</a> that will have
                many bypasses and disablers for Minecraft and especially Hypixel
                for example Fly, Bhop, Scaffold, Tower, etc. you may find more
                in-depth explanation of these features in these projects servers
                themselves. if you&apos;re not a developer and you just want to
                cheat in Minecraft, well you can do so with these 2 script hubs
                and even more soon! You even get Equity completely for free
                after purchasing Elysium!
              </h3>
            </div>
            {/* style="position: absolute; margin-right: 680px; margin-top: 935px; width: 400px;"> */}
            <div className="absolute mr-[680px] mt-[935px] w-[400px]">
              <h2>Why choose Elysium over popular clients?</h2>
              <h3>
                Elysium will allow you to make your own cheat for Minecraft
                without needing to learn a new language (Java) or learn how to
                use OpenGL or need to add support for different clients like
                Lunar Client, Elysium also allows you to have multiple cheats
                and have access to other peoples creations and other peoples
                cheats. You may even obfuscate your script and sell it and
                generate a revenue out of it! You aren&apos;t even bound to
                making cheats with Elysium! The possibilities are endless!
              </h3>
            </div>
          </div>
          <div
            id="lastnumbermobile"
            // style="flex-direction: column; align-items: center; justify-content: center;"
            className="flex flex-col items-center justify-center"
          >
            <InfoComponent
              title="I am a Roblox script developer, do I need to learn a new language?"
              description="With Elysium, such a thing is completely un needed and unrequired! Our scripting API is almost the same as Roblox's if not the exact same, meaning that if you have a script that works in Roblox, you won't need to change many things to make it work in Minecraft, many a few lines of code max. We also will have an in-depth explanation of our scripting API and also UI libraries, helpful scripts and more on"
            />
            <InfoComponent
              title="Not a developer? Not a problem!"
              description="There are multiple script hubs planning on adding Minecraft support to their script for example and that will have many bypasses and disablers for Minecraft and especially Hypixel for example Fly, Bhop, Scaffold, Tower, etc. you may find more in-depth explanation of these features in these projects servers themselves. if you're not a developer and you just want to cheat in Minecraft, well you can do so with these 2 script hubs and even more soon! You even get Equity completely for free after purchasing Elysium!"
            />
            <InfoComponent
              title="Why choose Elysium over popular clients?"
              description="Elysium will allow you to make your own cheat for Minecraft without needing to learn a new language (Java) or learn how to use OpenGL or need to add support for different clients like Lunar Client, Elysium also allows you to have multiple cheats and have access to other peoples creations and other peoples cheats. You may even obfuscate your script and sell it and generate a revenue out of it! You aren't even bound to making cheats with Elysium! The possibilities are endless!"
            />
            <div
              // style="margin-top: 0; margin-bottom: 0px;"
              className="CenteredContainer mb-0 mt-0"
            >
              <img
                alt="Uh Oh! Looks like we've failed to load this image! Get better internet."
                src="/images/landing/finaltabsection.svg"
              />
            </div>
          </div>
          {/* style="margin-top: 20;" */}
          <div className="CenteredContainer mt-[20px]">
            {/* style="justify-self: flex-end;" */}
            <div className="MediumGradientText justify-self-[flex-end]">
              Execute
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-bar">
              <div className="bottom-information">
                <h6>ALL</h6>
                <h1 className="sectiontitle1">Servers</h1>
              </div>
              <div className="bottom-information">
                <h6>41K+</h6>
                <h1 className="sectiontitle1">Scripts Executed Per Week</h1>
              </div>
              <div className="bottom-information">
                <h6>10K</h6>
                <h1 className="sectiontitle1">Scripts Readily Available</h1>
              </div>
              <div className="bottom-information">
                <h6>99.99%</h6>
                <h1 className="sectiontitle1">Guaranteed Uptime</h1>
              </div>
            </div>
          </div>
          {/* style="margin-top: 80px;" */}
          <h1 className="sectiontitle mt-[80px]">Elysium Media</h1>
          {/* style="margin-top: 20;" */}
          <div className="CenteredContainer mt-[20px]">
            <div className="row">
              {/* style="column-gap: 70px;"  */}
              <div className="flex w-[384px] flex-wrap md:w-[768px]">
                <div className="w-[384px]">
                  <h6 className="text-lg font-bold text-white">Our Videos</h6>
                  <YouTubeVideosComponent />
                </div>

                <div className="mt-4 w-[384px] md:mt-0">
                  <h6 className="text-lg font-bold text-white">Other Videos</h6>
                </div>
              </div>
            </div>
          </div>
          <FooterComponent />
        </div>
      </div>
    </>
  );
}
