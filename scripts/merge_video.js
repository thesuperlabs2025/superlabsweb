const ffmpegPath = require('ffmpeg-static');
const { exec } = require('child_process');
const path = require('path');

const videoInput = path.join('d:', 'React', 'superlabs', 'WhatsApp Video 2026-04-15 at 4.39.01 PM.mp4');
const audioInput = path.join('d:', 'React', 'superlabs', 'frontend', 'public', 'audio', 'story_voiceover.mp3');
const outputVideo = path.join('d:', 'React', 'superlabs', 'final_story_video.mp4');

// We use -y to overwrite if exists
// We use -map to prefer the new audio over the original if any
// If the original video has audio, this replaces it
const command = `"${ffmpegPath}" -y -i "${videoInput}" -i "${audioInput}" -c:v copy -map 0:v:0 -map 1:a:0 -shortest "${outputVideo}"`;

console.log("Merging audio and video...");
console.log(`Command: ${command}`);

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`FFmpeg output: ${stderr}`);
    }
    console.log(`Success! Final video saved to: ${outputVideo}`);
});
