/** @type {import('tailwindcss').Config} */
import sharedPreset from '@personal-ari/plugin-sdk/tailwind.preset'

export default {
    presets: [sharedPreset],
    content: ['./src/**/*.{ts,tsx}'],
}
