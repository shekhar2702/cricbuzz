const Spotlight = require("../models/spotlight");

const insertSpotLight = () => {
  Spotlight.insertMany([
    {
      image:
        "https://www.cricbuzz.com/a/img/v1/595x396/i1/c232376/csas-attempts-to-join-the-tra.jpg",
      spotLightHeading:
        "Smoke, mirrors, and plans for yet another CSA T20 tournament",
      description:
        "If all goes well, six teams will take the field early next January - the only regularly available window in the T20 calendar - to play 33 matches",
      agenda: " CSA DOMESTIC CRICKET",
    },
    {
      image:
        "https://www.cricbuzz.com/a/img/v1/595x396/i1/c232373/the-26-year-old-mossadek-last.jpg",
      spotLightHeading:
        "Mosaddek included in Bangladesh squad for first Test against SL",
      description:
        "The 26-year-old Mossadek, who played only three Tests in his career, last played a Test against Afghanistan in September 2019",
      agenda: "SRI LANKA TOUR OF BANGLADESH, 2022",
    },
  ]);
};

module.exports = insertSpotLight;
