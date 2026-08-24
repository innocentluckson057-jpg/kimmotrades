// Prediction algorithms for different market types

export const evenOddAlgorithm = (data) => {
  const { rsi, movingAverage, volume, volatility, recentOutcomes } = data;
  
  // Count recent even/odd patterns
  let evenCount = 0;
  let oddCount = 0;
  
  recentOutcomes.forEach(outcome => {
    if (outcome === 'E') evenCount++;
    else oddCount++;
  });

  // Calculate base probability
  let evenProb = (evenCount / recentOutcomes.length) * 100;
  let oddProb = (oddCount / recentOutcomes.length) * 100;

  // Adjust based on RSI
  if (rsi > 70) {
    evenProb *= 1.1;
    oddProb *= 0.9;
  } else if (rsi < 30) {
    evenProb *= 0.9;
    oddProb *= 1.1;
  }

  // Adjust based on volatility
  if (volatility === 'High') {
    oddProb *= 1.05;
  }

  // Normalize
  const total = evenProb + oddProb;
  evenProb = (evenProb / total) * 100;
  oddProb = (oddProb / total) * 100;

  return {
    prediction: evenProb > oddProb ? 'EVEN' : 'ODD',
    evenProbability: Math.round(evenProb),
    oddProbability: Math.round(oddProb),
    confidence: Math.max(evenProb, oddProb)
  };
};

export const overUnderAlgorithm = (data) => {
  const { currentPrice, strikePrice, trend, bid, ask } = data;
  
  const spread = ask - bid;
  const distance = currentPrice - strikePrice;
  const percentDiff = (Math.abs(distance) / strikePrice) * 100;

  let overProb = 50;
  
  if (distance > 0) {
    overProb = 50 + Math.min(percentDiff * 2, 30);
  } else {
    overProb = 50 - Math.min(percentDiff * 2, 30);
  }

  if (trend === 'Upward') {
    overProb += 5;
  } else if (trend === 'Downward') {
    overProb -= 5;
  }

  overProb = Math.max(30, Math.min(70, overProb));
  const underProb = 100 - overProb;

  return {
    prediction: overProb > 50 ? 'OVER' : 'UNDER',
    overProbability: Math.round(overProb),
    underProbability: Math.round(underProb),
    confidence: Math.max(overProb, underProb)
  };
};

export const matchAlgorithm = (match) => {
  const { homeForm, awayForm, headToHead } = match;
  
  let homeScore = 0;
  let awayScore = 0;
  let drawScore = 0;

  // Form analysis (last 5 games)
  homeScore += homeForm.filter(r => r === 'W').length * 10;
  homeScore += homeForm.filter(r => r === 'D').length * 5;
  awayScore += awayForm.filter(r => r === 'W').length * 10;
  awayScore += awayForm.filter(r => r === 'D').length * 5;

  // Head to head
  homeScore += headToHead.homeWins * 8;
  awayScore += headToHead.awayWins * 8;
  drawScore += headToHead.draws * 5;

  const total = homeScore + awayScore + drawScore;
  const homeProb = (homeScore / total) * 100;
  const awayProb = (awayScore / total) * 100;
  const drawProb = (drawScore / total) * 100;

  return {
    homeWinProb: Math.round(homeProb),
    drawProb: Math.round(drawProb),
    awayWinProb: Math.round(awayProb),
    prediction: homeProb > awayProb && homeProb > drawProb ? '1' : awayProb > drawProb ? '2' : 'X',
    goalsPrediction: homeScore + awayScore > 150 ? 'Over 2.5' : 'Under 2.5'
  };
};

export default {
  evenOddAlgorithm,
  overUnderAlgorithm,
  matchAlgorithm
};
