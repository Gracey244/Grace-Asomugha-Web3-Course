function dominantDirection(text) {
    // Count the number of characters for each writing direction
    let directions = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : null;
    });
  
    // Filter out characters that don't belong to any script
    directions = directions.filter(({name}) => name != null);
  
    // If no valid scripts are found, return a default value
    if (directions.length === 0) return 'ltr';
  
    // Determine the direction with the highest count
    return directions.reduce((a, b) => a.count > b.count ? a : b).name;
  }
  