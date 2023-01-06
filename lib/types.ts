import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Song = {
  imageUrl: any;
  songUrl: string;
  artist: string;
  title: string;
};

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  currentTimestamp: number;
  isPlaying: boolean;
  totalLength: number;
  songUrl: string;
  title: string;
};




export type TopTracks = {
  tracks: Song[];
};
