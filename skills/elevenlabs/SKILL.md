# ElevenLabs Skill

## Purpose
Text-to-speech generation via ElevenLabs API.

## Environment Variables
- `ELEVENLABS_API_KEY` - API key

## Usage
```bash
# TTS API call
curl -X POST "https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}" \
  -H "xi-api-key: ${ELEVENLABS_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{"text": "Hello world", "voice_settings": {"stability": 0.5}}'
```

## Voice IDs
Retrieve via `GET /v1/voices` API call.