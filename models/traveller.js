const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journeysStartLocations = this.journeys.map(function (journey) {
     return journey.startLocation;
   });
   return journeysStartLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const journeysEndLocations = this.journeys.map(function (journey) {
     return journey.endLocation;
      });
  return journeysEndLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter((journey) => {
    if (journey.transport === transport) return journey;
  });
  return journeysByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
     return journey.distance > minDistance;
   });
};

// Traveller.prototype.calculateTotalDistanceTravelled = function () {
//
// };
//
// Traveller.prototype.getUniqueModesOfTransport = function () {
//
// };


module.exports = Traveller;
