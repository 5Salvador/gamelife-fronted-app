import React, {useEffect} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const BestGames = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  return (
    <>
      <div className="section__container">
        <h2 className="section__header">The Best PC Games of 2025</h2>
        <p className="section__subheader">
          2025 is shaping up to be an exciting year for PC gamers, with a range
          of highly anticipated titles offering a mix of innovative gameplay,
          stunning graphics, and immersive experiences. From expansive
          open-world adventures to fast-paced multiplayer action, here are some
          of the best PC games of 2025 that are making waves in the gaming
          community:
        </p>
      </div>

      <div className="w-full container mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
         <div>
         <img
            src="https://i.pinimg.com/736x/15/f9/11/15f91148c4bd8299631959a051ae6e6b.jpg"
            alt="Console or PC Gaming"
            className="w-full h-auto max-w-2xl rounded-lg shadow-lg mb-8"
          />
         </div>
          <p>PC gaming is quite different from consoles, as your mileage with each game on this list will vary based on your rig. That said, many of the games on this list don't require the latest and greatest graphic cards--they merely help these great games look even better. And if you happen to have a Steam Deck, a lot of these games are playable on Valve's impressive handheld PC. We have a separate list of Steam Deck recommendations for games that play great there. We regularly reevaluate and update this list, so you can always use it as a resource to find some fresh recommendations.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-4 md:p-10">
          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://cdn.mos.cms.futurecdn.net/te5RQ2nzHFAGn9cd8ayZab-970-80.jpg.webp"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  God of War: Ragnarok
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Once again one of the most successful PlayStation-exclusive
                  games has found its way to PC and -you can all exhale now –
                  it's a great port. God of War isn't only an incredible tech
                  showcase thanks to its looks and world with no loading
                  screens, but also a carefully told story of fatherhood and a
                  robust action game.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://cdn.mos.cms.futurecdn.net/q8ZwFVS7C3eToiXYLEZZjH-970-80.jpg.webp"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Red Dead Redemption 2
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Red Dead Redemption 2 galloped onto PC back in 2019, and it's
                  the definitive version of the game. It's the same story of
                  Arthur Morgan's quest for redemption in the US wilderness,
                  with the same complex characters and detailed world to
                  explore, but with improved graphics and the option to add Red
                  Dead Redemption 2 mods that let you skip the prologue,
                  transform into an animal, or turn Arthur into the Joker.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.gamespot.com/a/uploads/scale_super/1585/15855271/4405759-4392211-bo6_launch_lowtown_01_branded.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Call of Duty: Black Ops 6
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Some Call of Duty games are clearly better than others, and
                  this year's iteration, Black Ops 6, is the best the series has
                  been in some time. The campaign is a smart and varied action
                  spectacle that keeps you on your toes as it explores paranoid
                  thriller tropes set against global events in the 1990s.
                  Meanwhile, the multiplayer's new omni-movement makes matches
                  feel fast and fluid.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.gamespot.com/a/uploads/scale_super/1585/15855271/4198118-4194680-cyberpunk2077phantomliberty.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cyberpunk 2077
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Cyberpunk 2077 had a divisive launch that by all accounts
                  failed to live up to the lofty expectations placed on it. But
                  CD Projekt Red didn't abandon the game, instead issuing a
                  steady stream of updates culminating in September 2023's
                  massive 2.0 update that overhauls many major systems, while
                  also integrating the new Phantom Liberty DLC. The Cyberpunk of
                  today is a sharper, more focused action-RPG with a greater
                  variety of skills that let you navigate Night City your own
                  way.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.gamespot.com/a/uploads/scale_super/1601/16018044/3988832-valorant.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Valorant
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  The initial response to Valorant was that it's basically a
                  mashup where Overwatch meets Counter-Strike--and yeah, that's
                  pretty accurate. That's also a good thing, because Valorant
                  draws on many of the strengths of those games to make
                  something unique. It focuses on the round-based
                  demolition-style game mode with two teams of five (attackers
                  and defenders) on balanced maps with specific lanes and
                  sightlines and an extremely fast time-to-kill.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.gamespot.com/a/uploads/scale_super/1585/15855271/4364071-4361287-spacemarine2promo.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Warhammer 40,000: Space Marine 2
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Warhammer 40,000: Space Marine was a cult classic when it
                  released more than a decade ago, and at long last, its sequel
                  has delivered just what fans of the bone-crunching action
                  series have been waiting for. That means a return to the
                  bloody, brutal combat from the first game, but with
                  refinements that make it feel more fluid than ever.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.gamespot.com/a/uploads/scale_super/1585/15855271/4198121-4113590-9011605776-fh3k39owiaaurhj.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Resident Evil
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Capcom's venerable Resident Evil series has been progressively
                  producing remakes of its classic library, but none of them
                  held the expectations and weight of Resident Evil 4. It's long
                  been regarded as one of the best survival-horror games of all
                  time, and a trendsetter for the action-focused style of the
                  genre. Capcom approached this remake especially cautiously,
                  giving it a light touch of upgrades that make the whole
                  experience feel modern without losing its soul.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://imgs.search.brave.com/cdLBCB0AZQCadDmELwhZKG-9AZhETFDN2tHJT7gERf0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5uYWNvbmdhbWlu/Zy5jb20vbWVkaWEv/Y2F0YWxvZy9wcm9k/dWN0L2Mvci9jcmlj/a2V0MjRfbGFuZHNj/YXBlMi53ZWJwP3dp/ZHRoPTEwMDAmc3Rv/cmU9bmFjb25fdXMm/aW1hZ2UtdHlwZT1s/YW5kc2NhcGVfaW1h/Z2U"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cricket 24
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Cricket 24 is the latest installment in the long-running
                  cricket video game series, and it promises to deliver an
                  immersive and realistic cricketing experience. With updated
                  graphics, improved gameplay mechanics, and a roster of
                  real-life players, Cricket 24 aims to capture the excitement
                  of the sport like never before. Whether you're a fan of Test
                  matches or T20 formats, this game has something for every
                  cricket enthusiast.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://imgs.search.brave.com/zoaig9I0QCD24bK8F8m_7xPjjgElPIhclwDuT1HjmmY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlc2l4dGhheGlz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wNy9FQS1G/Qy0yNS1SdXNoLmpw/Zw"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  EA Sports FC 25
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  EA Sports FC 25 is the latest entry in the long-running
                  football simulation series, and it promises to deliver an
                  authentic and immersive football experience. With updated
                  player rosters, improved graphics, and new gameplay features,
                  EA Sports FC 25 aims to capture the excitement of the
                  beautiful game like never before. Whether you're a fan of
                  career mode or online multiplayer, this game has something for
                  every football enthusiast.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://imgs.search.brave.com/3FTKcLan8MJnOUyZMfAxtR4Rk3OHtCcRlM1_xGA3j0s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQzNjg2/MTguanBn"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pub G
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  PUBG (PlayerUnknown's Battlegrounds) is a battle royale game
                  that has taken the gaming world by storm. In this intense
                  multiplayer experience, players parachute onto an island and
                  compete to be the last one standing. With a vast open world,
                  realistic graphics, and a variety of weapons and vehicles,
                  PUBG offers an adrenaline-pumping experience that keeps
                  players on the edge of their seats.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BestGames;
