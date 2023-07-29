/* eslint-disable no-console */
import { execa } from 'execa'
import { existsSync } from 'fs'
import { copy } from 'fs-extra'
(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    copy('index.html','404.html')
    const folderName = existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    let date = Date.now();
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages ("+date+")"]);
    console.log("Pushing to gh-pages("+date+")...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", "main"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();
