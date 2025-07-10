function calculateUBIPenalty(sentenceYears) {
  if (sentenceYears <= 0.5) return 0.05;
  if (sentenceYears <= 2) return 0.15;
  if (sentenceYears <= 5) return 0.25;
  if (sentenceYears <= 10) return 0.40;
  return 0.60;
}

function calculatePenaltyByOffense(offenseType) {
  const penalties = {
    contravention: 0.05,
    delit: 0.15,
    grave_delit: 0.25,
    crime: 0.40,
    constitutional_offense: 0.60
  };
  return penalties[offenseType] || 0;
}

function calculateAdvancedEducationBonus(degrees) {
  const levelPriority = ['high_school', 'bachelor', 'master', 'phd'];
  const weights = {
    high_school: 0.05,
    bachelor: 0.15,
    master: 0.25,
    phd: 0.35
  };

  let maxValidLevel = null;

  for (let degree of degrees) {
    if (degree.accredited && levelPriority.includes(degree.level)) {
      if (
        !maxValidLevel ||
        levelPriority.indexOf(degree.level) > levelPriority.indexOf(maxValidLevel)
      ) {
        maxValidLevel = degree.level;
      }
    }
  }

  return maxValidLevel ? weights[maxValidLevel] : 0;
}
