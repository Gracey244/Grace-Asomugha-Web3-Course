async function activityTable(day) {
  // Initialize an array of 24 zeros for each hour
  let hours = Array(24).fill(0);

  // Read the list of log file names
  let fileList = await textFile("camera_logs.txt");
  let files = fileList.trim().split("\n");

  // Read and process each log file
  for (let file of files) {
    let content = await textFile(file);
    let timestamps = content.trim().split("\n");

    for (let ts of timestamps) {
      let time = new Date(Number(ts));
      if (time.getDay() === day) {
        hours[time.getHours()]++;
      }
    }
  }

  return hours;
}
