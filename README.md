# Tuby

A React + TypeScript app for browsing YouTube video data through RapidAPI, built to stay fast as content grows.

![Tuby home page](https://i.ibb.co/jbmSfmz/devmaheremad-github-io-tuby.png)

**Live demo:** https://devmaheremad.github.io/tuby/

## What it shows
- **Performance:** route-level code splitting with `React.lazy` and `Suspense`, so each page loads only the code it needs.
- **State:** Zustand for lightweight global state.
- **UI:** Material UI v5 with responsive layouts.
- **Data:** RapidAPI (YouTube v3) integration with structured routing for home, video, channel and search pages.

## Stack
React 18 · TypeScript · Zustand · Material UI 5 · React Router 6 · RapidAPI

## Run locally
```bash
git clone https://github.com/devmaheremad/tuby.git
cd tuby
npm install
npm start
```

Create a `.env` file in the project root with your own RapidAPI key (never commit it):

```
REACT_APP_RAPID_API_KEY=your-rapidapi-key
```
