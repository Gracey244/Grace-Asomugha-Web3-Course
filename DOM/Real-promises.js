async function activityTable(day) {
  let hours = Array(24).fill(0);
  let fileList = await textFile("camera_logs.txt");
  let files = fileList.trim().split("\n");

  // Read all files concurrently
  let contents = await Promise.all(files.map(file => textFile(file)));

  for (let content of contents) {
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
