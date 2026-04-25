export type Livestream = {
  court: string;
  embedUrl?: string;
  note?: string;
};

// Replace placeholder embed URLs with actual YouTube embed links when available.
export const livestreams: Livestream[] = [
  { court: "Court 1", embedUrl: "https://www.youtube.com/embed/videoseries?si=feLxKKPETrfeunOS&amp;list=PLVAUDcutbNTOotbSkw38xXgQTXibGkN0q" },
  { court: "Court 2", embedUrl: "https://www.youtube.com/embed/videoseries?si=Lm18QrmCNmGHDzAz&amp;list=PLVAUDcutbNTObj-HYilDCEhR0gb4C9if8" },
  { court: "Court 12", embedUrl: "https://www.youtube.com/embed/videoseries?si=00g7scX_ID4X6UMS&amp;list=PLVAUDcutbNTMsnF8Bd9ilzYt-n0yXApbk" },
  { court: "Court 14", embedUrl: "https://www.youtube.com/embed/videoseries?si=EHfj033Bmy0xC7NC&amp;list=PLVAUDcutbNTPcgYJi9B_xmB027EyiSBgR" },
  { court: "Court 15", embedUrl: "https://www.youtube.com/embed/videoseries?si=39QwrtZJb8BMxibn&amp;list=PLVAUDcutbNTO3WbfWRa0XFH3i95W0-zMZ" },
  { court: "Court 17", embedUrl: "https://www.youtube.com/embed/videoseries?si=x3wSmenrq2TWG9Nd&amp;list=PLVAUDcutbNTPO3LSBiBY_YxFd2QAxJp8P" },
];
