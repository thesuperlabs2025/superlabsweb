const googleTTS = require('google-tts-api');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function generate() {
    const text = `Hi friends! Today I want to tell you a small story about a girl named Meera. 
வணக்கம் நண்பர்களே! இன்று நான் மீரா என்ற ஒரு சிறுமியைப் பற்றிய ஒரு சிறிய கதையைச் சொல்லப் போகிறேன். 
Meera was very small, but her dreams were very big. 
மீரா மிகவும் சிறியவள், ஆனால் அவளுடைய கனவுகள் மிகவும் பெரியவை. 
She always wanted to touch the stars. 
அவள் எப்போதும் நட்சத்திரங்களைத் தொட விரும்பினாள். 
Everyone said, 'Meera, you are too small!' 
அனைவரும் சொன்னார்கள், 'மீரா, நீ மிகவும் சிறியவள்!' 
But Meera smiled and said, 'No dream is too big for a brave heart.' 
ஆனால் மீரா புன்னகைத்துச் சொன்னாள், 'துணிச்சலான இதயத்திற்கு எந்தக் கனவும் பெரிதல்ல.' 
So, never stop dreaming. Keep shining! 
எனவே, கனவு காண்பதை நிறுத்தாதீர்கள். எப்போதும் பிரகாசித்துக் கொண்டே இருங்கள்!`;

    // split text into chunks of 200 characters max
    const results = googleTTS.getAllAudioUrls(text, {
        lang: 'ta', // Tamil (it can handle English words too usually, but 'ta' is primary)
        slow: false,
        host: 'https://translate.google.com',
    });

    const outputPath = path.join('d:', 'React', 'superlabs', 'frontend', 'public', 'audio', 'story_voiceover.mp3');
    const writer = fs.createWriteStream(outputPath);

    console.log("Generating audio with Google TTS...");

    for (const item of results) {
        console.log(`Fetching chunk: ${item.url.substring(0, 50)}...`);
        const response = await axios({
            url: item.url,
            method: 'GET',
            responseType: 'stream',
        });
        response.data.pipe(writer, { end: false });
        await new Promise((resolve) => response.data.on('end', resolve));
    }

    writer.end();
    console.log(`Audio saved to: ${outputPath}`);
}

generate().catch(console.error);
