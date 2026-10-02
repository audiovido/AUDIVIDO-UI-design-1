/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Music, Film, Users, Play, Pause, SkipForward, SkipBack, 
  Search, Heart, Flame, Send, Calendar, Check, Radio, VolumeX, Volume2,
  Compass, ArrowLeft, Tv, Library, Compass as BrowseIcon, FolderHeart, Clock, Disc, Upload,
  Shuffle, Repeat
} from 'lucide-react';
import { 
  Track, Movie, SocialPost, LiveStream, AuraEvent, AURA_TRACKS, AURA_MOVIES, AURA_STREAMS, getAvatarColors, INITIAL_SOCIAL_POSTS, INITIAL_AURA_EVENTS
} from './data/auraStore';
import { AudioSynth } from './utils/AudioSynth';
import { CosmicNightSky } from './components/CosmicNightSky';

// --- BESPOKE 3D SCULPTED EMBLEMS (STANDARD, PROFESSIONAL & PROPORTIONED) ---
function AudioEmblem3D() {
  return (
    <div className="relative w-[70px] h-[70px] sm:w-[78px] sm:h-[78px] flex items-center justify-center pointer-events-none">
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_8px_20px_rgba(245,158,11,0.55)]">
        <defs>
          <linearGradient id="pro-gold-band" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="25%" stopColor="#FDE68A" />
            <stop offset="65%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          <linearGradient id="pro-gold-metal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="45%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>

          <radialGradient id="pro-earcup-gold" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#FDE68A" />
            <stop offset="65%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#291305" />
          </radialGradient>

          <radialGradient id="pro-earcup-dark" cx="45%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#1C1917" />
            <stop offset="100%" stopColor="#09090B" />
          </radialGradient>

          <radialGradient id="pro-audio-halo" cx="50%" cy="52%" r="48%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.32" />
            <stop offset="70%" stopColor="#D97706" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft Ambient Audio Halo */}
        <circle cx="50" cy="52" r="42" fill="url(#pro-audio-halo)" />

        {/* Headphone Floating Shadow */}
        <ellipse cx="50" cy="87" rx="27" ry="4.5" fill="#000000" opacity="0.32" filter="blur(3.5px)" />

        {/* Elevated Majestic Studio Headband Arch */}
        <path 
          d="M26 56 C26 13, 74 13, 74 56" 
          fill="none" 
          stroke="url(#pro-gold-band)" 
          strokeWidth="5.5" 
          strokeLinecap="round" 
        />
        {/* Padded Inner Comfort Arch */}
        <path 
          d="M31 52 C31 18, 69 18, 69 52" 
          fill="none" 
          stroke="#3F2205" 
          strokeWidth="3.2" 
          strokeLinecap="round" 
          opacity="0.9"
        />
        {/* Soft Arch Highlight */}
        <path 
          d="M34 32 C38 18, 62 18, 66 32" 
          fill="none" 
          stroke="#FFFFFF" 
          strokeWidth="1.6" 
          strokeLinecap="round" 
          opacity="0.85" 
          filter="blur(0.5px)"
        />

        {/* Metal Swivel Gimbal Extenders */}
        <rect x="22" y="50" width="8" height="6" rx="2" fill="url(#pro-gold-metal)" />
        <rect x="70" y="50" width="8" height="6" rx="2" fill="url(#pro-gold-metal)" />

        {/* Left Earcup */}
        <g>
          <ellipse cx="23.5" cy="65" rx="9" ry="14.5" fill="url(#pro-earcup-gold)" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.4))" />
          <ellipse cx="23.5" cy="65" rx="5.5" ry="9.5" fill="url(#pro-earcup-dark)" />
          <ellipse cx="21" cy="60" rx="2.5" ry="5" fill="#FFFFFF" opacity="0.65" filter="blur(0.6px)" />
        </g>

        {/* Right Earcup */}
        <g>
          <ellipse cx="76.5" cy="65" rx="9" ry="14.5" fill="url(#pro-earcup-gold)" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.4))" />
          <ellipse cx="76.5" cy="65" rx="5.5" ry="9.5" fill="url(#pro-earcup-dark)" />
          <ellipse cx="74" cy="60" rx="2.5" ry="5" fill="#FFFFFF" opacity="0.65" filter="blur(0.6px)" />
        </g>
      </svg>
    </div>
  );
}

function VideoEmblem3D() {
  return (
    <div className="relative w-[70px] h-[70px] sm:w-[78px] sm:h-[78px] flex items-center justify-center pointer-events-none">
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_8px_20px_rgba(244,63,94,0.55)]">
        <defs>
          <linearGradient id="pro-tv-chassis" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF1F2" />
            <stop offset="20%" stopColor="#FDA4AF" />
            <stop offset="60%" stopColor="#F43F5E" />
            <stop offset="85%" stopColor="#BE123C" />
            <stop offset="100%" stopColor="#4C0519" />
          </linearGradient>

          <linearGradient id="pro-tv-metal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE4E6" />
            <stop offset="50%" stopColor="#F43F5E" />
            <stop offset="100%" stopColor="#881337" />
          </linearGradient>

          <radialGradient id="pro-tv-screen" cx="45%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#FDA4AF" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#F43F5E" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#881337" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#1E030B" stopOpacity="1" />
          </radialGradient>

          <radialGradient id="pro-tv-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.32" />
            <stop offset="70%" stopColor="#BE123C" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft Ambient Video Halo */}
        <circle cx="50" cy="50" r="42" fill="url(#pro-tv-halo)" />

        {/* TV Floating Shadow */}
        <ellipse cx="50" cy="88" rx="28" ry="4" fill="#000000" opacity="0.35" filter="blur(3.5px)" />

        {/* Dual Retro Starlight Antennas */}
        <line x1="47" y1="27" x2="31" y2="10" stroke="url(#pro-tv-metal)" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="31" cy="10" r="2.8" fill="#FFF1F2" filter="drop-shadow(0 0 3px #F43F5E)" />

        <line x1="53" y1="27" x2="69" y2="10" stroke="url(#pro-tv-metal)" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="69" cy="10" r="2.8" fill="#FFF1F2" filter="drop-shadow(0 0 3px #F43F5E)" />

        {/* Antenna Base Turret */}
        <rect x="44" y="25" width="12" height="4" rx="2" fill="url(#pro-tv-metal)" />

        {/* 3D Television Outer Chassis */}
        <rect x="18" y="27" width="64" height="47" rx="11" fill="url(#pro-tv-chassis)" filter="drop-shadow(0 6px 14px rgba(136,19,55,0.45))" />
        {/* Top Bevel Specular Sheen */}
        <path d="M22 29 C22 27.5, 78 27.5, 78 29 L75 33 L25 33 Z" fill="#FFFFFF" opacity="0.4" filter="blur(0.6px)" />

        {/* Inner Screen Bezel */}
        <rect x="23" y="32" width="54" height="37" rx="7" fill="#130207" />

        {/* 3D Curved Screen Surface */}
        <rect x="25" y="34" width="50" height="33" rx="5" fill="url(#pro-tv-screen)" />

        {/* Screen Subtle Scanlines */}
        <line x1="26" y1="42" x2="74" y2="42" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.15" />
        <line x1="26" y1="50" x2="74" y2="50" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.15" />
        <line x1="26" y1="58" x2="74" y2="58" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.15" />

        {/* Crisp Starlight Play Glyph on Screen */}
        <path d="M47 45.5 L56 50.5 L47 55.5 Z" fill="#FFFFFF" filter="drop-shadow(0 0 4px rgba(255,255,255,0.85))" />

        {/* Diagonal Curved Glass Screen Sheen */}
        <path d="M27 35 L48 35 L35 66 L27 66 Z" fill="#FFFFFF" opacity="0.2" filter="blur(0.8px)" />

        {/* Retro Angled Metal Legs */}
        <line x1="31" y1="74" x2="25" y2="85" stroke="url(#pro-tv-metal)" strokeWidth="3" strokeLinecap="round" />
        <line x1="69" y1="74" x2="75" y2="85" stroke="url(#pro-tv-metal)" strokeWidth="3" strokeLinecap="round" />

        {/* Front Power Indicator Starlight Node */}
        <circle cx="71" cy="71" r="1.4" fill="#FDA4AF" filter="drop-shadow(0 0 2px #F43F5E)" />
      </svg>
    </div>
  );
}

function SocialEmblem3D() {
  return (
    <div className="relative w-[70px] h-[70px] sm:w-[78px] sm:h-[78px] flex items-center justify-center pointer-events-none">
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_8px_20px_rgba(6,182,212,0.55)]">
        <defs>
          {/* Frosted Cyan Crystal Avatar Gradient */}
          <linearGradient id="pro-avatar-glass" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="25%" stopColor="#A5F3FC" stopOpacity="0.9" />
            <stop offset="65%" stopColor="#06B6D4" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#083344" stopOpacity="0.9" />
          </linearGradient>

          {/* Secondary Avatar Glass for Flanking Figures */}
          <linearGradient id="pro-avatar-flank" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#38BDF8" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0.8" />
          </linearGradient>

          <radialGradient id="pro-social-halo" cx="50%" cy="52%" r="48%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.32" />
            <stop offset="70%" stopColor="#0891B2" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Halo */}
        <circle cx="50" cy="52" r="42" fill="url(#pro-social-halo)" />

        {/* Floating Depth Shadow */}
        <ellipse cx="50" cy="86" rx="30" ry="5" fill="#000000" opacity="0.35" filter="blur(4px)" />

        {/* Connected Neural Constellation Beam */}
        <path d="M28 51 Q 50 64 72 51" fill="none" stroke="#38BDF8" strokeWidth="1.8" opacity="0.8" filter="blur(0.4px)" />
        <circle cx="28" cy="51" r="2" fill="#E0F2FE" />
        <circle cx="50" cy="57.5" r="2.2" fill="#FFFFFF" filter="drop-shadow(0 0 3px #38BDF8)" />
        <circle cx="72" cy="51" r="2" fill="#E0F2FE" />

        {/* 1. LEFT FLANKING FIGURE (Angled 3D Companion) */}
        <g opacity="0.85">
          <circle cx="28" cy="40" r="8" fill="url(#pro-avatar-flank)" />
          <ellipse cx="26" cy="37" rx="3" ry="1.8" fill="#FFFFFF" opacity="0.7" />
          <path d="M14 74 C14 58, 42 58, 42 74 Z" fill="url(#pro-avatar-flank)" />
          <path d="M17 71 C19 61, 38 61, 40 71" fill="none" stroke="#BAE6FD" strokeWidth="1.2" opacity="0.6" />
        </g>

        {/* 2. RIGHT FLANKING FIGURE (Angled 3D Companion) */}
        <g opacity="0.85">
          <circle cx="72" cy="40" r="8" fill="url(#pro-avatar-flank)" />
          <ellipse cx="70" cy="37" rx="3" ry="1.8" fill="#FFFFFF" opacity="0.7" />
          <path d="M58 74 C58 58, 86 58, 86 74 Z" fill="url(#pro-avatar-flank)" />
          <path d="M60 71 C62 61, 81 61, 83 71" fill="none" stroke="#BAE6FD" strokeWidth="1.2" opacity="0.6" />
        </g>

        {/* 3. CENTER PRIMARY LEADER FIGURE (Volumetric 3D Foreground) */}
        <g filter="drop-shadow(0 4px 10px rgba(0,0,0,0.35))">
          <circle cx="50" cy="33" r="10.5" fill="url(#pro-avatar-glass)" />
          <ellipse cx="46.5" cy="29" rx="4.5" ry="2.5" fill="#FFFFFF" opacity="0.85" />
          <path d="M32 75 C32 54, 68 54, 68 75 Z" fill="url(#pro-avatar-glass)" />
          <circle cx="50" cy="62" r="2.2" fill="#FFFFFF" filter="drop-shadow(0 0 4px #22D3EE)" />
          <path d="M35 71 C38 57, 62 57, 65 71" fill="none" stroke="#FFFFFF" strokeWidth="1.4" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

export default function App() {
  // Real Audio Player Reference & Local File Support
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const [customAudioUrl, setCustomAudioUrl] = useState<string>('/audio/coffee_bars.mp3');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  // Navigation State: 'portal' | 'music' | 'movie' | 'community'
  const [currentWorld, setCurrentWorld] = useState<'portal' | 'music' | 'movie' | 'community'>('portal');
  
  // Transition triggers
  const [isTraveling, setIsTraveling] = useState<boolean>(false);
  const [travelDestination, setTravelDestination] = useState<string>('');

  // Sub-navigation Tabs inside other worlds
  const [movieTab, setMovieTab] = useState<'catalog' | 'player' | 'connect'>('catalog');
  const [communityTab, setCommunityTab] = useState<'chat' | 'realms' | 'live' | 'events'>('chat');

  // Cinema Hardware & Filter states
  const [projectorRatio, setProjectorRatio] = useState<'16:9' | '2.39:1'>('2.39:1');
  const [isShutterOpen, setIsShutterOpen] = useState<boolean>(true);
  const [cinemaPreset, setCinemaPreset] = useState<'blackout' | 'velvet' | 'twilight' | 'lounge'>('velvet');
  const [movieGenreFilter, setMovieGenreFilter] = useState<string>('all');

  // Sandro-inspired Left Sidebar active filter state
  const [activeMusicCategory, setActiveMusicCategory] = useState<'all' | 'lofi' | 'ambient' | 'fireplace'>('all');

  // Unified Playing State
  const [currentTrack, setCurrentTrack] = useState<Track>(AURA_TRACKS[0]);
  const [likedTracks, setLikedTracks] = useState<Record<string, boolean>>({ 'track-coffee-bars': true, 'track-1': true });
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);
  const [turntableSpeed, setTurntableSpeed] = useState<'33' | '45'>('33');
  const [turntablePitch, setTurntablePitch] = useState<number>(0);

  const toggleLikeTrack = (trackId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikedTracks(prev => ({
      ...prev,
      [trackId]: !prev[trackId]
    }));
  };

  const [currentMovie, setCurrentMovie] = useState<Movie>(AURA_MOVIES[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPlayingFireplace, setIsPlayingFireplace] = useState<boolean>(false);
  const [trackProgress, setTrackProgress] = useState<number>(35); // %
  const [movieProgress, setMovieProgress] = useState<number>(60); // %

  // Glass Connect Controllers
  const [lightDimmers, setLightDimmers] = useState<number>(100); 
  const [lightWarmth, setLightWarmth] = useState<number>(20); 
  const [ambientVolume, setAmbientVolume] = useState<number>(60); 

  // Interactive feeds
  const [socialPosts, setSocialPosts] = useState<SocialPost[]>(INITIAL_SOCIAL_POSTS);
  const [eventsList, setEventsList] = useState<AuraEvent[]>(INITIAL_AURA_EVENTS);
  const [movieSearch, setMovieSearch] = useState<string>('');
  const [musicSearch, setMusicSearch] = useState<string>('');
  const [musicNavTab, setMusicNavTab] = useState<'explore' | 'library'>('explore');
  const [chatMessageText, setChatMessageText] = useState<string>('');
  const [attachedTrackId, setAttachedTrackId] = useState<string>('');

  // Canvas refs
  const freqCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const movieCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const movieAnimFrame = useRef<number | null>(null);
  const musicAnimFrame = useRef<number | null>(null);

  // Custom audio file upload handler (e.g. for user's uploaded "1 minute final.mp3")
  const handleCustomAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomAudioUrl(url);
      setCurrentTrack(prev => ({
        ...prev,
        title: file.name.replace(/\.[^/.]+$/, ''),
        artist: 'Your Uploaded Music (Local File)'
      }));
      setIsPlaying(true);
      AudioSynth.stopAll();
      setTimeout(() => {
        if (audioPlayerRef.current) {
          audioPlayerRef.current.play().catch(e => console.log('Audio playback started:', e));
        }
      }, 60);
    }
  };

  const handleTimeUpdate = () => {
    if (audioPlayerRef.current && audioPlayerRef.current.duration) {
      const pct = (audioPlayerRef.current.currentTime / audioPlayerRef.current.duration) * 100;
      setTrackProgress(pct);
    }
  };

  const handleSeek = (newPct: number) => {
    setTrackProgress(newPct);
    if (audioPlayerRef.current && audioPlayerRef.current.duration) {
      audioPlayerRef.current.currentTime = (newPct / 100) * audioPlayerRef.current.duration;
    }
  };

  // Sync volume with Web Audio synth & HTML5 Audio
  useEffect(() => {
    AudioSynth.setVolume(ambientVolume / 100);
    if (audioPlayerRef.current) {
      audioPlayerRef.current.volume = ambientVolume / 100;
    }
  }, [ambientVolume]);

  // Sync playing states with real audio and ambient generators
  useEffect(() => {
    const audio = audioPlayerRef.current;
    if (isPlaying) {
      if (currentWorld === 'music') {
        if (customAudioUrl && customAudioUrl.startsWith('blob:') && audio) {
          AudioSynth.stopAll();
          AudioSynth.connectMediaElement(audio);
          audio.play().catch(e => console.log('Audio autoplay handled:', e));
        } else {
          if (audio) audio.pause();
          AudioSynth.playTrack(currentTrack.audioSynthType || 'aura-lofi');
        }
      } else if (currentWorld === 'movie') {
        if (audio) audio.pause();
        AudioSynth.playTrack('movie');
      } else {
        if (audio) audio.pause();
        AudioSynth.playTrack('music');
      }
    } else {
      if (audio) audio.pause();
      AudioSynth.stopAll();
      setIsPlayingFireplace(false);
    }
  }, [isPlaying, currentWorld, currentTrack, customAudioUrl]);

  // Track progress timers for non-audio sources
  useEffect(() => {
    let interval: any;
    if (isPlaying && currentWorld !== 'music') {
      interval = setInterval(() => {
        setTrackProgress(p => (p >= 100 ? 0 : p + 0.6));
        setMovieProgress(p => (p >= 100 ? 0 : p + 0.35));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentWorld]);

  // --- TRANSITIONAL ZOOM PORTAL TRAVEL ---
  const handleTravel = (destination: 'portal' | 'music' | 'movie' | 'community') => {
    setIsTraveling(true);
    setTravelDestination(destination);

    if (destination !== 'portal') {
      if (destination === 'music') {
        // Normal music tab entry: Needle points down in silver rest, disc still, music waits for selection
        if (audioPlayerRef.current) audioPlayerRef.current.pause();
        AudioSynth.stopAll();
        setIsPlaying(false);
      } else if (destination === 'movie') {
        if (audioPlayerRef.current) audioPlayerRef.current.pause();
        AudioSynth.playTrack('movie');
        setIsPlaying(true);
      } else {
        if (audioPlayerRef.current) audioPlayerRef.current.pause();
        AudioSynth.playTrack('music');
        setIsPlaying(true);
      }
    } else {
      if (audioPlayerRef.current) audioPlayerRef.current.pause();
      setIsPlaying(false);
      AudioSynth.stopAll();
    }

    setTimeout(() => {
      setCurrentWorld(destination);
      setIsTraveling(false);
      setTravelDestination('');
    }, 800);
  };

  const handleMuteAll = () => {
    setIsPlaying(false);
    AudioSynth.stopAll();
    setIsPlayingFireplace(false);
  };

  const handleToggleFireplace = () => {
    if (isPlayingFireplace) {
      AudioSynth.stopAll();
      setIsPlayingFireplace(false);
      setIsPlaying(false);
    } else {
      AudioSynth.playTrack('fireplace');
      setIsPlayingFireplace(true);
      setIsPlaying(true);
      setAmbientVolume(70);
    }
  };

  // --- POST ACTION FORM ---
  const handleSendPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessageText.trim()) return;

    const newPost: SocialPost = {
      id: `post-${Date.now()}`,
      author: 'Aura Explorer',
      handle: '@explorer',
      avatarSeed: 'guest',
      content: chatMessageText,
      timestamp: 'Just now',
      reactions: { love: 0, fire: 0, star: 0 },
      hasReacted: { love: false, fire: false, star: false },
      attachedTrackId: attachedTrackId || undefined
    };

    setSocialPosts([newPost, ...socialPosts]);
    setChatMessageText('');
    setAttachedTrackId('');
  };

  const handlePostReact = (postId: string, type: 'love' | 'fire' | 'star') => {
    setSocialPosts(posts => 
      posts.map(p => {
        if (p.id !== postId) return p;
        const active = p.hasReacted[type];
        return {
          ...p,
          reactions: { ...p.reactions, [type]: active ? p.reactions[type] - 1 : p.reactions[type] + 1 },
          hasReacted: { ...p.hasReacted, [type]: !active }
        };
      })
    );
  };

  const handleToggleRSVP = (eventId: string) => {
    setEventsList(evs => 
      evs.map(ev => {
        if (ev.id !== eventId) return ev;
        const going = ev.rsvpStatus === 'going';
        return {
          ...ev,
          rsvpStatus: going ? 'not_going' : 'going',
          attendeesCount: going ? ev.attendeesCount - 1 : ev.attendeesCount + 1
        };
      })
    );
  };

  const selectAndPlayTrack = (track: Track) => {
    setCurrentTrack(track);
    if (audioPlayerRef.current && customAudioUrl.startsWith('blob:') && track.id === 'track-coffee-bars') {
      AudioSynth.stopAll();
      audioPlayerRef.current.play().catch(e => console.log('Audio play error:', e));
    } else {
      if (audioPlayerRef.current) audioPlayerRef.current.pause();
      AudioSynth.playTrack(track.audioSynthType);
    }
    setIsPlaying(true);
  };

  const handleNextTrack = () => {
    if (isShuffle) {
      const remainingTracks = AURA_TRACKS.filter(t => t.id !== currentTrack.id);
      const randomTrack = remainingTracks[Math.floor(Math.random() * remainingTracks.length)];
      selectAndPlayTrack(randomTrack || AURA_TRACKS[0]);
    } else {
      const currentIdx = AURA_TRACKS.findIndex(t => t.id === currentTrack.id);
      const nextIdx = (currentIdx + 1) % AURA_TRACKS.length;
      selectAndPlayTrack(AURA_TRACKS[nextIdx]);
    }
  };

  const handlePrevTrack = () => {
    const currentIdx = AURA_TRACKS.findIndex(t => t.id === currentTrack.id);
    const prevIdx = (currentIdx - 1 + AURA_TRACKS.length) % AURA_TRACKS.length;
    selectAndPlayTrack(AURA_TRACKS[prevIdx]);
  };

  const selectAndPlayMovie = (movie: Movie) => {
    setCurrentMovie(movie);
    setMovieTab('player');
    AudioSynth.playTrack('movie');
    setIsPlaying(true);
  };

  const filteredMovies = AURA_MOVIES.filter(m => {
    const matchesSearch = m.title.toLowerCase().includes(movieSearch.toLowerCase()) ||
      m.genre.toLowerCase().includes(movieSearch.toLowerCase());
    const matchesGenre = movieGenreFilter === 'all' || 
      m.genre.toLowerCase().includes(movieGenreFilter.toLowerCase());
    return matchesSearch && matchesGenre;
  });

  // Filter track catalog list based on category, library tab, and search query
  const getFilteredTracks = () => {
    let tracks = AURA_TRACKS;
    if (musicNavTab === 'library') {
      tracks = tracks.filter(t => likedTracks[t.id]);
    } else if (activeMusicCategory !== 'all') {
      if (activeMusicCategory === 'lofi') tracks = tracks.filter(t => t.genre.toLowerCase().includes('lofi') || t.title.toLowerCase().includes('lofi') || t.genre.toLowerCase().includes('chill'));
      if (activeMusicCategory === 'ambient') tracks = tracks.filter(t => t.genre.toLowerCase().includes('ambient') || t.genre.toLowerCase().includes('drone'));
      if (activeMusicCategory === 'fireplace') tracks = tracks.filter(t => t.audioSynthType === 'fireplace');
    }
    if (musicSearch.trim()) {
      const q = musicSearch.toLowerCase();
      tracks = tracks.filter(t => 
        t.title.toLowerCase().includes(q) || 
        t.artist.toLowerCase().includes(q) || 
        t.genre.toLowerCase().includes(q)
      );
    }
    return tracks;
  };

  // --- CANVAS: DYNAMIC AUDIO-REACTIVE ANALOG FREQUENCY WAVEFORM ---
  useEffect(() => {
    if (currentWorld !== 'music') {
      if (musicAnimFrame.current) cancelAnimationFrame(musicAnimFrame.current);
      return;
    }

    const canvas = freqCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 70;

    let phase = 0;

    const renderCozySinewave = () => {
      // Pure transparent background so the soft aurora mist floats seamlessly in the bottom bar
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const freqData = AudioSynth.getFrequencyData();
      const timeData = AudioSynth.getTimeDomainData();

      // Extract real audio frequency bands
      let bassEnergy = 0;
      let midEnergy = 0;
      let trebleEnergy = 0;

      if (freqData && isPlaying) {
        // Bass bins 0..7
        for (let i = 0; i < 8; i++) bassEnergy += freqData[i] || 0;
        bassEnergy = bassEnergy / (8 * 255); // 0 to 1

        // Mid bins 8..31
        for (let i = 8; i < 32; i++) midEnergy += freqData[i] || 0;
        midEnergy = midEnergy / (24 * 255);

        // Treble bins 32..63
        for (let i = 32; i < 64; i++) trebleEnergy += freqData[i] || 0;
        trebleEnergy = trebleEnergy / (32 * 255);
      }

      // Dynamic phase speed based on music rhythm and frequency energy
      const waveSpeed = isPlaying ? (0.025 + bassEnergy * 0.08 + midEnergy * 0.035) : 0.006;
      phase += waveSpeed;

      // Authentic Northern Lights (Aurora Borealis) waveform layers: Emerald Green, Cosmic Violet/Purple, and Deep Dark Tones
      const layers = [
        { 
          stroke: 'rgba(52, 211, 153, 0.95)',  // Aurora Emerald Green
          glow: 'rgba(16, 185, 129, 0.9)', 
          blur: 10,
          width: 2.4, 
          mult: 1.0, 
          freqShift: 0 
        },
        { 
          stroke: 'rgba(192, 132, 252, 0.92)', // Cosmic Northern Violet / Purple
          glow: 'rgba(168, 85, 247, 0.85)', 
          blur: 8,
          width: 1.9, 
          mult: 0.8, 
          freqShift: 1.35 
        },
        { 
          stroke: 'rgba(5, 150, 105, 0.75)',   // Deep Dark Aurora Emerald / Forest
          glow: 'rgba(4, 120, 87, 0.65)', 
          blur: 6,
          width: 1.4, 
          mult: 0.6, 
          freqShift: 2.7 
        },
        { 
          stroke: 'rgba(126, 34, 206, 0.65)',  // Deep Velvet Dark Purple / Cosmic Night
          glow: 'rgba(88, 28, 135, 0.55)', 
          blur: 4,
          width: 1.2, 
          mult: 0.45, 
          freqShift: 4.1 
        }
      ];

      layers.forEach((layer) => {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = layer.width;
        ctx.strokeStyle = layer.stroke;
        ctx.shadowColor = layer.glow;
        ctx.shadowBlur = layer.blur;

        const dynamicAmp = isPlaying ? (5 + bassEnergy * 24 * layer.mult + midEnergy * 8) : 2.5;

        for (let x = 0; x < canvas.width; x++) {
          const sampleIdx = timeData ? Math.floor((x / canvas.width) * timeData.length) : 0;
          const rawWave = (timeData && isPlaying) ? ((timeData[sampleIdx] - 128) / 128) * 14 * layer.mult : 0;

          const freqOffset = Math.sin(x * (0.02 + trebleEnergy * 0.015) + phase + layer.freqShift) * dynamicAmp;
          const harmonic = Math.sin(x * 0.045 + phase * 1.6) * (bassEnergy * 8);

          const y = canvas.height / 2 + freqOffset + rawWave + harmonic;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        ctx.restore();
      });

      // Frequency peak spark particles jumping to beats (Aurora starlight sparkles in emerald & violet)
      if (isPlaying && bassEnergy > 0.06) {
        const count = Math.min(8, Math.floor(3 + bassEnergy * 8));
        for (let p = 0; p < count; p++) {
          const isGreen = p % 2 === 0;
          ctx.fillStyle = isGreen ? `rgba(52, 211, 153, ${0.5 + bassEnergy * 0.5})` : `rgba(192, 132, 252, ${0.5 + bassEnergy * 0.5})`;
          ctx.shadowColor = isGreen ? '#34d399' : '#c084fc';
          ctx.shadowBlur = 6;
          const px = (phase * 35 + p * (canvas.width / count)) % canvas.width;
          const py = canvas.height / 2 + Math.sin(px * 0.03 + phase) * (6 + bassEnergy * 16) + (isGreen ? -1 : 1) * (bassEnergy * 6);
          ctx.beginPath();
          ctx.arc(px, py, 1.2 + bassEnergy * 2.0, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      musicAnimFrame.current = requestAnimationFrame(renderCozySinewave);
    };

    renderCozySinewave();
    return () => {
      if (musicAnimFrame.current) cancelAnimationFrame(musicAnimFrame.current);
    };
  }, [currentWorld, isPlaying]);

  // --- CANVAS: CINEMATIC SPACE CRUISER (MOVIE WORLD) ---
  useEffect(() => {
    if (currentWorld !== 'movie' || movieTab !== 'player') {
      if (movieAnimFrame.current) cancelAnimationFrame(movieAnimFrame.current);
      return;
    }

    const canvas = movieCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 750;
    canvas.height = 420;

    const stars: { x: number; y: number; z: number; speed: number; size: number }[] = [];
    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * canvas.width,
        speed: 1.6 + Math.random() * 2.6,
        size: 0.5 + Math.random() * 1.8
      });
    }

    let angle = 0;
    let sparks: { x: number; y: number; size: number; alpha: number; speedX: number; speedY: number }[] = [];

    const renderSpaceCinema = () => {
      ctx.fillStyle = 'rgba(3, 1, 7, 0.22)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nebula = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 20,
        canvas.width / 2, canvas.height / 2, 260
      );
      nebula.addColorStop(0, 'rgba(3, 242, 165, 0.1)'); 
      nebula.addColorStop(0.5, 'rgba(168, 85, 247, 0.04)'); 
      nebula.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = nebula;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.z -= star.speed;
        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width - canvas.width / 2;
          star.y = Math.random() * canvas.height - canvas.height / 2;
        }

        const px = (star.x / star.z) * canvas.width * 0.75 + canvas.width / 2;
        const py = (star.y / star.z) * canvas.height * 0.75 + canvas.height / 2;
        const r = (1 - star.z / canvas.width) * star.size * 2.2;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          ctx.beginPath();
          ctx.arc(px, py, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(3, 242, 165, ${0.3 + (1 - star.z / canvas.width) * 0.7})`;
          ctx.fill();
        }
      });

      angle += 0.012;
      const shipX = canvas.width / 2 + Math.sin(angle) * 140;
      const shipY = canvas.height / 2 + Math.cos(angle * 1.5) * 35;

      if (isPlaying) {
        sparks.push({
          x: shipX - 30,
          y: shipY + (Math.random() * 4 - 2),
          size: 1 + Math.random() * 3.5,
          alpha: 1.0,
          speedX: -2.8 - Math.random() * 2.5,
          speedY: Math.random() * 1.2 - 0.6
        });
      }

      sparks = sparks.filter(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= 0.045;
        if (p.alpha <= 0) return false;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 63, 94, ${p.alpha})`; 
        ctx.fill();
        return true;
      });

      ctx.save();
      ctx.translate(shipX, shipY);
      ctx.rotate(Math.cos(angle) * 0.18); 

      ctx.fillStyle = '#f8fafc';
      ctx.beginPath();
      ctx.moveTo(35, 0); 
      ctx.lineTo(-15, -12); 
      ctx.lineTo(-10, -3);
      ctx.lineTo(-18, 0); 
      ctx.lineTo(-10, 3);
      ctx.lineTo(-15, 12); 
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#06b6d4'; 
      ctx.beginPath();
      ctx.moveTo(15, -2);
      ctx.lineTo(24, 0);
      ctx.lineTo(15, 2);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#03f2a5'; 
      ctx.fillRect(-18, -13, 3, 2);
      ctx.fillRect(-18, 11, 3, 2);

      ctx.restore();

      movieAnimFrame.current = requestAnimationFrame(renderSpaceCinema);
    };

    renderSpaceCinema();
    return () => {
      if (movieAnimFrame.current) cancelAnimationFrame(movieAnimFrame.current);
    };
  }, [currentWorld, movieTab, isPlaying]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans relative overflow-x-hidden select-none aurora-bg transition-colors duration-1000">
      
      {/* GLOBAL COSMIC NIGHT SKY & AURORA BOREALIS & DYNAMIC METEORS */}
      <CosmicNightSky />

      {/* --- TOP BRANDING NAV BAR (COMPACT & COLORFUL) --- */}
      <header className="relative z-50 flex items-center justify-between px-4 sm:px-6 py-3 bg-slate-950/70 backdrop-blur-2xl border-b border-white/10 shrink-0">
        
        {/* Brand Home Capsule */}
        <button 
          onClick={() => handleTravel('portal')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-emerald-500/15 border border-emerald-500/30 text-xs font-black tracking-widest text-white font-mono hover:border-emerald-400 transition-all cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.25)] active:scale-95"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span className="bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">AURA</span>
        </button>

        {/* Space-Efficient Harmonious Jewel Navigation Chips */}
        <nav className="flex items-center gap-1 sm:gap-1.5 p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl">
          <button 
            onClick={() => handleTravel('portal')} 
            className={`jewel-chip ${currentWorld === 'portal' ? 'jewel-chip-active-emerald' : 'text-slate-300'}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block shadow-[0_0_6px_#10b981]" />
            <span>PORTAL</span>
          </button>
          <button 
            onClick={() => handleTravel('music')} 
            className={`jewel-chip ${currentWorld === 'music' ? 'jewel-chip-active-gold' : 'text-slate-300'}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block shadow-[0_0_6px_#f59e0b]" />
            <span>MUSIC</span>
          </button>
          <button 
            onClick={() => handleTravel('movie')} 
            className={`jewel-chip ${currentWorld === 'movie' ? 'jewel-chip-active-rose' : 'text-slate-300'}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block shadow-[0_0_6px_#f43f5e]" />
            <span>CINEMA</span>
          </button>
          <button 
            onClick={() => handleTravel('community')} 
            className={`jewel-chip ${currentWorld === 'community' ? 'jewel-chip-active-cyan' : 'text-slate-300'}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block shadow-[0_0_6px_#06b6d4]" />
            <span>SOCIAL</span>
          </button>
        </nav>

        {/* Compact Right Control Pill */}
        <div className="flex items-center gap-2">
          <button 
            onClick={handleMuteAll}
            className="p-1.5 px-2.5 rounded-full bg-white/5 border border-white/10 hover:border-emerald-500/30 text-slate-300 hover:text-white transition-all text-[10px] font-mono flex items-center gap-1.5 cursor-pointer active:scale-95"
            title="Mute sounds"
          >
            <VolumeX className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline text-[9px] font-bold">MUTE</span>
          </button>
        </div>
      </header>

      {/* Real HTML5 Audio Player */}
      <audio 
        ref={audioPlayerRef} 
        src={customAudioUrl} 
        onTimeUpdate={handleTimeUpdate} 
        onEnded={() => setIsPlaying(false)} 
        className="hidden" 
        preload="auto" 
      />

      {/* --- MASTER VIEWPORT CONTEXT --- */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 flex flex-col justify-center items-center relative z-10">

        {/* ========================================================= */}
        {/* === VIEW 1: PORTAL MAIN MENU (STABLE TRIAD LIQUID GLASS ORBS) === */}
        {/* ========================================================= */}
        {currentWorld === 'portal' && (
          <div className="w-full max-w-4xl animate-fadeIn flex flex-col items-center justify-center min-h-[600px] relative">
            
            {/* Majestic Authoritative Downward-Pointing Triad Layout */}
            <div className="relative w-full max-w-[700px] h-[550px] flex items-center justify-center">

              {/* 1. TOP-LEFT: AUDIO ORB (Golden Sunstone Liquid Glass with Integrated 3D Emblem & Typography) */}
              <div className="absolute top-[3%] left-[5%] sm:left-[7%] flex flex-col items-center float-node-audio z-20">
                <div className="relative flex items-center justify-center">
                  <div className="bubble-ground-shadow" />
                  <button 
                    onClick={() => handleTravel('music')}
                    className="w-48 h-48 sm:w-[216px] sm:h-[216px] rounded-full liquid-glass-orb orb-theme-audio hover:scale-106 active:scale-95 flex flex-col items-center justify-center relative cursor-pointer group shadow-2xl transition-all duration-500"
                  >
                    <div className="orb-plasma-liquid bg-gradient-to-tr from-amber-400/30 via-yellow-300/35 to-transparent" />
                    
                    {/* Harmonious Optical Ax-to-Ax Alignment */}
                    <div className="relative z-20 flex flex-col items-center justify-center w-full h-full pt-1.5 pb-2">
                      <div className="transition-transform duration-500 group-hover:scale-108 group-hover:-translate-y-1">
                        <AudioEmblem3D />
                      </div>
                      <div className="mt-1.5 flex flex-col items-center justify-center">
                        <span className="text-[14.5px] sm:text-[16px] font-extrabold tracking-[0.22em] uppercase font-syne bg-gradient-to-b from-white via-amber-100 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(245,158,11,0.85)] pl-0.5 select-none transition-all duration-300 group-hover:drop-shadow-[0_2px_14px_rgba(251,191,36,1)]">
                          AUDIO
                        </span>
                        <span className="w-7 h-[1.8px] rounded-full bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-1 opacity-70 group-hover:w-12 group-hover:opacity-100 transition-all duration-500" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* 2. TOP-RIGHT: VIDEO ORB (Crimson Starfire Liquid Glass with 3D TV Emblem & Typography) */}
              <div className="absolute top-[3%] right-[5%] sm:right-[7%] flex flex-col items-center float-node-video z-20">
                <div className="relative flex items-center justify-center">
                  <div className="bubble-ground-shadow" />
                  <button 
                    onClick={() => handleTravel('movie')}
                    className="w-48 h-48 sm:w-[216px] sm:h-[216px] rounded-full liquid-glass-orb orb-theme-video hover:scale-106 active:scale-95 flex flex-col items-center justify-center relative cursor-pointer group shadow-2xl transition-all duration-500"
                  >
                    <div className="orb-plasma-liquid bg-gradient-to-tr from-rose-400/30 via-pink-300/35 to-transparent" />
                    
                    {/* Harmonious Optical Ax-to-Ax Alignment */}
                    <div className="relative z-20 flex flex-col items-center justify-center w-full h-full pt-1.5 pb-2">
                      <div className="transition-transform duration-500 group-hover:scale-108 group-hover:-translate-y-1">
                        <VideoEmblem3D />
                      </div>
                      <div className="mt-1.5 flex flex-col items-center justify-center">
                        <span className="text-[14.5px] sm:text-[16px] font-extrabold tracking-[0.22em] uppercase font-syne bg-gradient-to-b from-white via-rose-100 to-rose-300 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(244,63,94,0.85)] pl-0.5 select-none transition-all duration-300 group-hover:drop-shadow-[0_2px_14px_rgba(251,113,133,1)]">
                          VIDEO
                        </span>
                        <span className="w-7 h-[1.8px] rounded-full bg-gradient-to-r from-transparent via-rose-400 to-transparent mt-1 opacity-70 group-hover:w-12 group-hover:opacity-100 transition-all duration-500" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* 3. BOTTOM-CENTER: SOCIAL HUB ORB (Cyan Celestial Ice Liquid Glass with 3D Community Emblem & Typography) */}
              <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 flex flex-col items-center float-node-social z-20">
                <div className="relative flex items-center justify-center">
                  <div className="bubble-ground-shadow" />
                  <button 
                    onClick={() => handleTravel('community')}
                    className="w-48 h-48 sm:w-[216px] sm:h-[216px] rounded-full liquid-glass-orb orb-theme-social hover:scale-106 active:scale-95 flex flex-col items-center justify-center relative cursor-pointer group shadow-2xl transition-all duration-500"
                  >
                    <div className="orb-plasma-liquid bg-gradient-to-tr from-cyan-400/30 via-teal-300/35 to-transparent" />
                    
                    {/* Harmonious Optical Ax-to-Ax Alignment */}
                    <div className="relative z-20 flex flex-col items-center justify-center w-full h-full pt-1.5 pb-2">
                      <div className="transition-transform duration-500 group-hover:scale-108 group-hover:-translate-y-1">
                        <SocialEmblem3D />
                      </div>
                      <div className="mt-1.5 flex flex-col items-center justify-center">
                        <span className="text-[14.5px] sm:text-[16px] font-extrabold tracking-[0.22em] uppercase font-syne bg-gradient-to-b from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(6,182,212,0.85)] pl-0.5 select-none transition-all duration-300 group-hover:drop-shadow-[0_2px_14px_rgba(56,189,248,1)]">
                          SOCIAL
                        </span>
                        <span className="w-7 h-[1.8px] rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-1 opacity-70 group-hover:w-12 group-hover:opacity-100 transition-all duration-500" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* === VIEW 2: STANDALONE WIDESCREEN MUSIC WORLD (AUDIO) === */}
        {/* ========================================================= */}
        {currentWorld === 'music' && (
          <div className="w-full max-w-6xl space-y-6 animate-fadeIn py-2 pb-36 relative">
            
            {/* Top Standard Music Streaming Navigation Bar (Rounded Pills & Full Curves) */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-2.5 rounded-full bg-slate-950/35 border border-white/10 backdrop-blur-2xl shrink-0 shadow-lg">
              
              {/* Left Navigation: Explore, Stations Filter Pills, Library */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <button 
                  onClick={() => { setMusicNavTab('explore'); setActiveMusicCategory('all'); }}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    musicNavTab === 'explore' && activeMusicCategory === 'all'
                      ? 'bg-amber-500/25 text-amber-300 border border-amber-400/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <BrowseIcon className="w-3.5 h-3.5" />
                  <span>Explore</span>
                </button>

                <button 
                  onClick={() => { setMusicNavTab('explore'); setActiveMusicCategory('lofi'); }} 
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    musicNavTab === 'explore' && activeMusicCategory === 'lofi' 
                      ? 'bg-amber-500/25 text-amber-300 border border-amber-400/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  Lo-Fi Beats
                </button>

                <button 
                  onClick={() => { setMusicNavTab('explore'); setActiveMusicCategory('ambient'); }} 
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    musicNavTab === 'explore' && activeMusicCategory === 'ambient' 
                      ? 'bg-amber-500/25 text-amber-300 border border-amber-400/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  Ambient Space
                </button>

                <button 
                  onClick={() => { setMusicNavTab('explore'); setActiveMusicCategory('fireplace'); }} 
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    musicNavTab === 'explore' && activeMusicCategory === 'fireplace' 
                      ? 'bg-amber-500/25 text-amber-300 border border-amber-400/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  Hearth Fireside
                </button>

                <button 
                  onClick={() => setMusicNavTab('library')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    musicNavTab === 'library'
                      ? 'bg-amber-500/25 text-amber-300 border border-amber-400/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <FolderHeart className="w-3.5 h-3.5" />
                  <span>My Library</span>
                </button>
              </div>

              {/* Center/Right: Live Music Search Bar & My Profile Button */}
              <div className="flex items-center gap-2.5 flex-1 max-w-sm justify-end">
                <div className="relative w-full max-w-[210px]">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input 
                    type="text"
                    value={musicSearch}
                    onChange={(e) => setMusicSearch(e.target.value)}
                    placeholder="Search tracks, artists..."
                    className="w-full pl-8 pr-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400/50 transition-all font-sans"
                  />
                  {musicSearch && (
                    <button 
                      onClick={() => setMusicSearch('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-white cursor-pointer"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* My Profile Button Capsule */}
                <button 
                  onClick={() => handleTravel('community')}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 hover:text-white transition-all cursor-pointer shrink-0 shadow-sm active:scale-95"
                  title="My Profile"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-[10px] font-bold text-slate-950 shadow-sm">
                    A
                  </div>
                  <span className="hidden sm:inline">My Profile</span>
                </button>
              </div>

            </div>

            {/* Main Streaming Grid: Bold Hero Turntable Deck on Left, Up Next Queue Sidebar on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch min-h-[500px]">
              
              {/* LEFT: Curated Amber Hero Deck with BOLD Gramophone (8 Columns) */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                
                {/* Hero Card */}
                <div className="relative rounded-[36px] bg-gradient-to-tr from-amber-600/85 via-amber-700/80 to-orange-500/85 p-7 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-8 overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl h-full">
                  
                  {/* Subtle vector stardust nodes overlay */}
                  <div className="absolute inset-0 bg-radial-nodes opacity-15 pointer-events-none" />
                  
                  {/* Discreet Round Upload MP3 Button in Top Corner */}
                  <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-20">
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="p-2.5 sm:px-3.5 sm:py-2 rounded-full bg-black/25 hover:bg-black/45 border border-white/20 text-amber-100 hover:text-white transition-all shadow-md active:scale-95 cursor-pointer backdrop-blur-md flex items-center gap-1.5 group"
                      title="Upload custom MP3"
                    >
                      <Upload className="w-3.5 h-3.5 text-amber-300 group-hover:scale-110 transition-transform" />
                      <span className="hidden sm:inline text-[10.5px] font-mono font-medium">IMPORT MP3</span>
                    </button>
                    <input 
                      ref={fileInputRef} 
                      type="file" 
                      accept="audio/*" 
                      onChange={handleCustomAudioUpload} 
                      className="hidden" 
                    />
                  </div>

                  {/* Left Column: Clean Song Specification & Information Showcase */}
                  <div className="relative z-10 space-y-4 max-w-sm text-left flex-1 flex flex-col justify-between py-1">
                    
                    <div className="space-y-3.5">
                      <div>
                        <span className="text-[10px] font-mono font-bold tracking-widest text-amber-200/80 uppercase block">SONG SPECIFICATIONS</span>
                        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-sans drop-shadow-sm leading-tight mt-1">
                          {currentTrack.title}
                        </h2>
                      </div>

                      {/* Clean Music Information Grid */}
                      <div className="grid grid-cols-2 gap-2.5 pt-1">
                        <div className="p-3 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10">
                          <span className="text-[9.5px] font-mono text-amber-200/75 uppercase tracking-wider block">ARTIST</span>
                          <span className="text-xs sm:text-sm font-bold text-white truncate block mt-0.5">{currentTrack.artist}</span>
                        </div>

                        <div className="p-3 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10">
                          <span className="text-[9.5px] font-mono text-amber-200/75 uppercase tracking-wider block">ALBUM</span>
                          <span className="text-xs sm:text-sm font-bold text-white truncate block mt-0.5">
                            {currentTrack.id === 'track-coffee-bars' && customAudioUrl.startsWith('blob:') ? 'Local Master' : 'Aura Sessions Vol. 1'}
                          </span>
                        </div>

                        <div className="p-3 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10">
                          <span className="text-[9.5px] font-mono text-amber-200/75 uppercase tracking-wider block">GENRE</span>
                          <span className="text-xs sm:text-sm font-bold text-white truncate block mt-0.5">{currentTrack.genre}</span>
                        </div>

                        <div className="p-3 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10">
                          <span className="text-[9.5px] font-mono text-amber-200/75 uppercase tracking-wider block">FORMAT · LENGTH</span>
                          <span className="text-xs sm:text-sm font-bold text-white truncate block mt-0.5">
                            Vinyl 33 · {currentTrack.duration}
                          </span>
                        </div>
                      </div>

                      {/* Vibes Badges */}
                      <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                        {currentTrack.vibes.map(v => (
                          <span key={v} className="px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-[10px] font-medium text-amber-100">
                            #{v}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: ELEGANT SQUARE 3D LIQUID GLASS VINYL TURNTABLE (GRAMOPHONE) */}
                  <div className="turntable-3d-deck rounded-[34px] w-64 h-64 sm:w-72 sm:h-72 md:w-[306px] md:h-[306px] aspect-square p-3.5 flex items-center justify-center shrink-0 relative overflow-hidden group select-none shadow-[0_30px_70px_rgba(0,0,0,0.95),inset_0_2px_3px_rgba(255,255,255,0.7)]">
                    
                    {/* Inner Refractive 3D Liquid Glass Plinth Slab with Beveled Rim */}
                    <div className="turntable-glass-plinth rounded-[28px]" />

                    {/* --- 1. 3D CIRCULAR SUNKEN RECESSED PLATTER WELL (Under the Disc) --- */}
                    <div className="absolute left-[44%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[196px] h-[196px] sm:w-[222px] sm:h-[222px] rounded-full platter-well-3d flex items-center justify-center pointer-events-none">
                      {/* Concentric Lathe Machining Groove Rings in the Platter Basin */}
                      <div className="absolute inset-2 rounded-full border border-stone-800/60 pointer-events-none" />
                      <div className="absolute inset-5 rounded-full border border-stone-800/40 pointer-events-none" />
                      <div className="absolute inset-9 rounded-full border border-stone-800/25 pointer-events-none" />
                    </div>

                    {/* --- 2. 3D DIE-CAST PLATTER & GROOVED HIGH-GLOSS VINYL RECORD --- */}
                    <div className="absolute left-[44%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
                      
                      {/* Heavy 3D Die-Cast Aluminum Platter with Chamfered Stroboscopic Rim */}
                      <div className="platter-chassis w-[178px] h-[178px] sm:w-[202px] sm:h-[202px] flex items-center justify-center relative">
                        
                        {/* Outer Strobe Dot Ring */}
                        <div className="strobe-dot-ring" />

                        {/* High-Gloss Grooved Vinyl Record with Anisotropic Twin-Sheen Reflection */}
                        <div 
                          onClick={() => setIsPlaying(!isPlaying)}
                          className={`w-[162px] h-[162px] sm:w-[184px] sm:h-[184px] rounded-full relative flex items-center justify-center shadow-2xl cursor-pointer ${
                            isPlaying ? 'vinyl-active-spin' : ''
                          }`}
                          style={{
                            backgroundImage: `
                              radial-gradient(circle, #09090b 24%, #18181b 36%, #09090b 42%, #27272a 48%, #09090b 54%, #1f1f23 60%, #09090b 68%, #27272a 76%, #050507 100%),
                              conic-gradient(from 45deg, rgba(255,255,255,0.18) 0deg, transparent 40deg, transparent 140deg, rgba(255,255,255,0.18) 180deg, transparent 220deg, transparent 320deg, rgba(255,255,255,0.18) 360deg)
                            `,
                            backgroundBlendMode: 'screen, normal'
                          }}
                          title={isPlaying ? "Click to Pause" : "Click to Play"}
                        >
                          {/* Micro-Grooves Concentric Rings */}
                          <div className="absolute inset-2 rounded-full border border-stone-700/50 pointer-events-none" />
                          <div className="absolute inset-5 rounded-full border border-stone-800/60 pointer-events-none" />
                          <div className="absolute inset-8 rounded-full border border-stone-700/40 pointer-events-none" />
                          <div className="absolute inset-12 rounded-full border border-stone-800/50 pointer-events-none" />

                          {/* Pure Standard Vinyl Center Label (Minimalist, Luxurious, Matching Track Colors) */}
                          <div className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr ${currentTrack.colorFrom} ${currentTrack.colorTo} border border-amber-300/70 flex flex-col items-center justify-center shadow-xl relative z-10 text-center select-none`}>
                            {/* Inner Gold Foil Hairline Ring */}
                            <div className="absolute inset-1 rounded-full border border-amber-200/50 pointer-events-none" />
                            {/* Solid Polished Brass & Steel Spindle Pin */}
                            <div className="w-3.5 h-3.5 rounded-full bg-stone-950 border border-white/60 flex items-center justify-center shadow-inner">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-amber-200 to-amber-500 shadow" />
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>

                    {/* --- 3. TACTILE METALLIC START / STOP PUSHBUTTON (Front-Left Corner, Clean & Standard) --- */}
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 z-30 px-3 py-1.5 rounded-full bg-gradient-to-b from-stone-800 via-stone-900 to-black border border-white/30 shadow-[0_4px_12px_rgba(0,0,0,0.85),inset_0_1px_2px_rgba(255,255,255,0.4)] hover:border-amber-400/60 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer group/btn"
                      title={isPlaying ? "Stop Turntable" : "Start Turntable"}
                    >
                      <div className={`w-2.5 h-2.5 rounded-full transition-colors ${isPlaying ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-stone-600'}`} />
                      <span className="text-[9px] font-mono font-bold tracking-wider text-stone-200 group-hover/btn:text-white uppercase select-none">
                        {isPlaying ? 'STOP' : 'START'}
                      </span>
                    </button>

                    {/* --- 4. ARTICULATED TONEARM & POLISHED SILVER REST CRADLE --- */}
                    
                    {/* Polished Machined Silver Tonearm Rest Cradle (قسمت نقره‌ای - Positioned naturally close beside the disc) */}
                    <div className="absolute top-[128px] right-[34px] sm:right-[38px] z-15 flex flex-col items-center pointer-events-none">
                      {/* Silver Machined Pillar */}
                      <div className="w-2 h-4 bg-gradient-to-b from-stone-100 via-stone-300 to-stone-500 rounded-xs shadow-[0_2px_5px_rgba(0,0,0,0.85)] border-x border-white/80" />
                      {/* Silver Cradle Fork */}
                      <div className="w-4.5 h-1.5 bg-gradient-to-r from-stone-300 via-white to-stone-300 rounded-full border border-stone-300 shadow-sm" />
                    </div>

                    {/* Slim Luxury Classic Brass & Chrome Tonearm Assembly (Brought comfortably closer to disc) */}
                    <div 
                      className="absolute top-3 right-5 sm:top-3.5 sm:right-6 w-14 h-34 origin-[34px_18px] transition-transform duration-[850ms] cubic-bezier(0.25, 0.8, 0.25, 1) pointer-events-none z-25"
                      style={{
                        transform: isPlaying ? 'rotate(30deg)' : 'rotate(0deg)'
                      }}
                    >
                      {/* Gimbal Pivot Base with Concentric Bearing Rings & Ruby Jewel Bearing */}
                      <div className="absolute top-1 right-2.5 w-7 h-7 rounded-full bg-gradient-to-br from-amber-200 via-amber-500 to-amber-800 border border-amber-300 shadow-xl flex items-center justify-center">
                        <div className="w-4.5 h-4.5 rounded-full bg-gradient-to-tr from-stone-800 to-stone-950 border border-amber-500/50 flex items-center justify-center">
                          {/* Ruby Jewel Bearing Core */}
                          <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_5px_#f43f5e]" />
                        </div>
                      </div>

                      {/* Cylindrical Numbered Brass Counterweight extending behind gimbal */}
                      <div className="absolute -top-1 right-4.5 w-3.5 h-3 bg-gradient-to-b from-amber-100 via-amber-400 to-amber-700 rounded-2xs border border-amber-300 shadow" />

                      {/* Polished Champagne Brass & Chrome Tonearm Tube */}
                      <svg viewBox="0 0 40 100" className="absolute top-3.5 right-1 w-10 h-28 overflow-visible filter drop-shadow-[2px_4px_6px_rgba(0,0,0,0.85)]">
                        <path 
                          d="M27 0 L27 80 L23 95" 
                          fill="none" 
                          stroke="url(#brass-chrome-tonearm)" 
                          strokeWidth="2.8" 
                          strokeLinecap="round" 
                        />
                        <defs>
                          <linearGradient id="brass-chrome-tonearm" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#fef08a" />
                            <stop offset="40%" stopColor="#ffffff" />
                            <stop offset="75%" stopColor="#d97706" />
                            <stop offset="100%" stopColor="#78350f" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Precision Angled Headshell & Cartridge with Diamond Stylus Needle */}
                      <div className="absolute bottom-0 right-[15px] w-3.5 h-6 bg-gradient-to-b from-stone-950 via-stone-800 to-black border border-amber-500/50 rounded-2xs shadow-2xl flex flex-col justify-between p-0.5">
                        <div className="w-2 h-1 bg-amber-400 rounded-2xs mx-auto" />
                        {/* Illuminated Stylus Cueing Spotlight (Shines directly ON the vinyl record grooves when playing!) */}
                        <div className={`w-1.5 h-1.5 rounded-full mx-auto transition-opacity ${isPlaying ? 'bg-amber-300 shadow-[0_0_8px_4px_rgba(251,191,36,0.95)] opacity-100' : 'bg-stone-700 opacity-20'}`} />
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT SIDEBAR: UP NEXT QUEUE (4 Columns) */}
              <div className="lg:col-span-4 rounded-[32px] p-5 sm:p-6 bg-slate-950/35 backdrop-blur-2xl border border-white/10 flex flex-col justify-between space-y-4 shadow-xl">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold tracking-widest text-amber-400 font-mono uppercase">UP NEXT</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">{getFilteredTracks().length} TRACKS</span>
                </div>

                {/* Track List */}
                <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1 scrollbar-thin flex-1">
                  {getFilteredTracks().map((track, idx) => {
                    const isCurrent = currentTrack.id === track.id;
                    const isLiked = likedTracks[track.id];
                    return (
                      <div 
                        key={track.id}
                        onClick={() => selectAndPlayTrack(track)}
                        className={`group flex items-center justify-between p-2.5 rounded-2xl transition-all cursor-pointer border ${
                          isCurrent 
                            ? 'bg-amber-500/15 border-amber-400/35 shadow-[0_0_15px_rgba(245,158,11,0.15)]' 
                            : 'bg-white/5 hover:bg-white/10 border-transparent hover:border-white/10'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          {/* Index or Live Equalizer */}
                          <div className="w-5 text-center shrink-0">
                            {isCurrent && isPlaying ? (
                              <span className="flex items-end justify-center gap-0.5 h-3">
                                <span className="w-0.5 h-2 bg-amber-400 rounded-full animate-pulse" />
                                <span className="w-0.5 h-3 bg-amber-300 rounded-full animate-pulse delay-75" />
                                <span className="w-0.5 h-1.5 bg-yellow-200 rounded-full animate-pulse delay-150" />
                              </span>
                            ) : (
                              <span className="text-[10px] font-mono text-slate-400 group-hover:text-white">
                                {String(idx + 1).padStart(2, '0')}
                              </span>
                            )}
                          </div>

                          {/* Cover Art */}
                          <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${track.colorFrom} ${track.colorTo} flex items-center justify-center shrink-0 shadow-md relative overflow-hidden`}>
                            <Music className="w-4 h-4 text-white/60" />
                          </div>

                          {/* Title & Artist */}
                          <div className="min-w-0 flex-1">
                            <h5 className={`text-xs font-bold truncate transition-colors ${isCurrent ? 'text-amber-300' : 'text-white group-hover:text-amber-200'}`}>
                              {track.title}
                            </h5>
                            <p className="text-[10px] text-slate-400 truncate">{track.artist}</p>
                          </div>
                        </div>

                        {/* Right Actions: Heart & Duration */}
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <button
                            onClick={(e) => toggleLikeTrack(track.id, e)}
                            className="p-1 text-slate-500 hover:text-rose-400 transition-colors cursor-pointer"
                            title="Favorite"
                          >
                            <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : 'opacity-0 group-hover:opacity-100 text-slate-400'}`} />
                          </button>
                          <span className="text-[10px] font-mono text-slate-400">{track.duration}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Subtle Bottom Vibes Line */}
                <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-[10px] text-slate-400">
                  <span className="text-amber-400 font-mono font-medium">VIBES:</span>
                  <div className="flex items-center gap-1.5 truncate">
                    {currentTrack.vibes.map((v, i) => (
                      <React.Fragment key={v}>
                        {i > 0 && <span className="opacity-40">·</span>}
                        <span>{v}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* --- LOCKED DOCKED 3D LIQUID GLASS BOTTOM MEDIA CONTROLLER (ALWAYS VISIBLE & PINNED) --- */}
            <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3.5rem)] max-w-2xl z-50 pointer-events-auto">
              <div className="relative w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-full backdrop-blur-3xl bg-stone-950/92 border border-white/20 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.28),_inset_0_-1px_2px_rgba(0,0,0,0.5),_0_20px_50px_rgba(0,0,0,0.85),_0_0_35px_rgba(245,158,11,0.12)] flex items-center justify-between gap-3 sm:gap-4 transition-all duration-300 overflow-hidden">
                
                {/* Background Ambient Audio-Reactive Aurora Ribbon (Fine Curved Lines with Luminous Halo) */}
                <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none z-0">
                  <canvas 
                    ref={freqCanvasRef} 
                    className={`w-full h-full block transition-opacity duration-500 ${isPlaying ? 'opacity-55' : 'opacity-15'}`} 
                  />
                  {/* Soft Specular Glass Reflection Sheen */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/40 pointer-events-none rounded-full" />
                </div>

                {/* 1. LEFT ZONE: Current Track Identity (Clean & Minimal with Soft Frosted Backing) */}
                <div className="min-w-0 max-w-[130px] sm:max-w-[170px] text-left relative z-10 shrink-0 px-2.5 py-1 rounded-2xl bg-white/[0.04] border border-white/5 backdrop-blur-sm">
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate font-sans">
                    {currentTrack.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-stone-300 font-medium truncate mt-0.5">
                    {currentTrack.artist}
                  </p>
                </div>

                {/* 2. CENTER ZONE: Transport Controls & Interactive Scrubber */}
                <div className="flex-1 min-w-0 max-w-sm sm:max-w-md flex flex-col items-center gap-1.5 px-1 sm:px-2 relative z-10">
                  {/* Subtle frosted glass grouping cradle around buttons for high visual clarity */}
                  <div className="flex items-center gap-1 sm:gap-2 px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.08)]">
                    {/* Shuffle Button */}
                    <button 
                      onClick={() => setIsShuffle(!isShuffle)}
                      className={`p-1.5 rounded-full transition-all cursor-pointer ${
                        isShuffle ? 'text-amber-300 bg-amber-400/20' : 'text-stone-400 hover:text-white'
                      }`}
                      title={isShuffle ? "Shuffle On" : "Shuffle Off"}
                    >
                      <Shuffle className="w-3.5 h-3.5" />
                    </button>

                    <button 
                      onClick={handlePrevTrack}
                      className="p-1.5 rounded-full text-stone-300 hover:text-amber-300 hover:bg-white/10 active:scale-90 transition-all cursor-pointer"
                      title="Previous track"
                    >
                      <SkipBack className="w-4 h-4" />
                    </button>

                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-200 text-slate-950 flex items-center justify-center hover:scale-108 active:scale-95 transition-all shadow-[0_0_18px_rgba(245,158,11,0.7)] cursor-pointer"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <Pause className="w-4.5 h-4.5 fill-slate-950 text-slate-950" />
                      ) : (
                        <Play className="w-4.5 h-4.5 fill-slate-950 text-slate-950 ml-0.5" />
                      )}
                    </button>

                    <button 
                      onClick={handleNextTrack}
                      className="p-1.5 rounded-full text-stone-300 hover:text-amber-300 hover:bg-white/10 active:scale-90 transition-all cursor-pointer"
                      title="Next track"
                    >
                      <SkipForward className="w-4 h-4" />
                    </button>

                    {/* Repeat Button */}
                    <button 
                      onClick={() => setIsRepeat(!isRepeat)}
                      className={`p-1.5 rounded-full transition-all cursor-pointer ${
                        isRepeat ? 'text-amber-300 bg-amber-400/20' : 'text-stone-400 hover:text-white'
                      }`}
                      title={isRepeat ? "Repeat On" : "Repeat Off"}
                    >
                      <Repeat className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Track Progress Scrubber */}
                  <div className="w-full flex items-center gap-2">
                    <span className="text-[8px] font-mono text-stone-400 w-7 text-right shrink-0">
                      {Math.floor(trackProgress * 0.05)}:{(Math.floor(trackProgress * 3) % 60).toString().padStart(2, '0')}
                    </span>
                    
                    <div 
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        const newPct = Math.min(100, Math.max(0, (clickX / rect.width) * 100));
                        handleSeek(newPct);
                      }}
                      className="flex-1 h-1.5 bg-white/10 hover:bg-white/20 rounded-full overflow-hidden cursor-pointer relative group/scrubber transition-all"
                    >
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 via-amber-300 to-yellow-200 rounded-full relative transition-all duration-200" 
                        style={{ width: `${trackProgress}%` }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#fef08a] opacity-0 group-hover/scrubber:opacity-100 transition-opacity" />
                      </div>
                    </div>

                    <span className="text-[8px] font-mono text-stone-400 w-7 text-left shrink-0">
                      {currentTrack.duration}
                    </span>
                  </div>
                </div>

                {/* 3. RIGHT ZONE: Integrated Master Volume Slider */}
                <div className="flex justify-end items-center gap-2 shrink-0 relative z-10">
                  {/* Master Volume Controller */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md shadow-[inset_0_1px_2px_rgba(255,255,255,0.08)]">
                    <button 
                      onClick={() => setAmbientVolume(v => (v > 0 ? 0 : 70))}
                      className="text-stone-300 hover:text-amber-300 transition-colors cursor-pointer"
                      title={ambientVolume === 0 ? "Unmute" : "Mute"}
                    >
                      {ambientVolume === 0 ? (
                        <VolumeX className="w-3.5 h-3.5 text-rose-400" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                      )}
                    </button>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={ambientVolume}
                      onChange={(e) => setAmbientVolume(Number(e.target.value))}
                      className="w-12 sm:w-16 h-1 bg-white/15 rounded-lg appearance-none cursor-pointer accent-amber-400"
                      title={`Volume: ${ambientVolume}%`}
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* === VIEW 3: STANDALONE WIDESCREEN MOVIE WORLD (VIDEO) === */}
        {/* ========================================================= */}
        {currentWorld === 'movie' && (
          <div className="w-full max-w-6xl space-y-6 animate-fadeIn py-3">
            
            {/* Symmetrical Top Compact Navigation Bar (3-Zone Balanced Architecture) */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shrink-0 shadow-lg">
              {/* Left Zone: Compact Home Pill & Live Film Indicator */}
              <div className="flex items-center gap-2.5">
                <button 
                  onClick={() => handleTravel('portal')}
                  className="compact-back-pill bg-white/5 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 transition-all cursor-pointer active:scale-95"
                  title="Return to Home Portal"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>HOME</span>
                </button>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-rose-500/20 text-[9px] font-mono text-rose-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse shadow-[0_0_6px_#f43f5e]" />
                  <span>STELLAR THEATER</span>
                </div>
              </div>

              {/* Center Zone: Symmetrical Jewel Navigation Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-black/40 rounded-full border border-white/10 backdrop-blur-md">
                <button 
                  onClick={() => setMovieTab('catalog')}
                  className={`jewel-chip ${movieTab === 'catalog' ? 'jewel-chip-active-rose' : 'text-slate-300 hover:text-white'}`}
                >
                  <Film className="w-3 h-3 text-rose-400" />
                  <span>CATALOG</span>
                </button>
                <button 
                  onClick={() => setMovieTab('player')}
                  className={`jewel-chip ${movieTab === 'player' ? 'jewel-chip-active-rose' : 'text-slate-300 hover:text-white'}`}
                >
                  <Tv className="w-3 h-3 text-rose-400" />
                  <span>THEATER</span>
                </button>
                <button 
                  onClick={() => setMovieTab('connect')}
                  className={`jewel-chip ${movieTab === 'connect' ? 'jewel-chip-active-rose' : 'text-slate-300 hover:text-white'}`}
                >
                  <Radio className="w-3 h-3 text-rose-400" />
                  <span>STUDIO ENGINE</span>
                </button>
              </div>

              {/* Right Zone: Formats & Technical Badges */}
              <div className="flex items-center gap-2 text-[9.5px] font-mono text-rose-200 font-bold tracking-wider bg-black/40 px-3 py-1.5 rounded-full border border-rose-500/30 shadow">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shadow-[0_0_8px_#f43f5e]" />
                <span>CINEMA 02 · 4K DOLBY ATMOS</span>
              </div>
            </div>

            {/* --- CATALOG TAB (SYMMETRICAL & HARMONIOUS) --- */}
            {movieTab === 'catalog' && (
              <div className="space-y-6 animate-fadeIn">
                
                {/* Symmetrical Hero Premiere Showcase Card with 70mm Film Perforation Borders */}
                <div className="relative rounded-3xl bg-gradient-to-tr from-rose-950/90 via-purple-950/80 to-slate-950/95 p-6 sm:p-8 flex flex-col lg:flex-row justify-between items-center gap-8 overflow-hidden shadow-2xl border border-rose-500/30 backdrop-blur-2xl">
                  {/* Subtle vector stardust nodes overlay */}
                  <div className="absolute inset-0 bg-radial-nodes opacity-20 pointer-events-none" />

                  {/* 70mm Film Perforation Sprocket Holes Top & Bottom */}
                  <div className="absolute top-2 left-6 right-6 hidden sm:flex justify-between pointer-events-none opacity-25">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <div key={`perf-t-${i}`} className="w-3 h-2 rounded-[2px] bg-white/70 border border-black/40" />
                    ))}
                  </div>
                  <div className="absolute bottom-2 left-6 right-6 hidden sm:flex justify-between pointer-events-none opacity-25">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <div key={`perf-b-${i}`} className="w-3 h-2 rounded-[2px] bg-white/70 border border-black/40" />
                    ))}
                  </div>

                  {/* Left Column: Film Metadata & Actions */}
                  <div className="relative z-10 space-y-4 max-w-xl text-left">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-500/25 text-rose-300 border border-rose-500/50 text-[9px] font-mono font-black uppercase tracking-widest shadow">
                        EXCLUSIVE PREMIERE
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-black/50 text-slate-300 text-[8.5px] font-mono font-bold border border-white/10">
                        OFFICIAL SELECTION · 70MM
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-black/50 text-rose-300 text-[8.5px] font-mono font-bold border border-white/10">
                        {currentMovie.rating}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-black/50 text-slate-300 text-[8.5px] font-mono font-bold border border-white/10">
                        {currentMovie.year}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-black/50 text-slate-300 text-[8.5px] font-mono font-bold border border-white/10">
                        {currentMovie.duration}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
                        {currentMovie.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans line-clamp-3">
                        {currentMovie.description}
                      </p>
                    </div>

                    {/* Symmetrical Action Buttons */}
                    <div className="pt-2 flex flex-wrap gap-3 items-center">
                      <button 
                        onClick={() => selectAndPlayMovie(currentMovie)}
                        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white font-mono text-xs font-black tracking-wider transition-all shadow-[0_0_25px_rgba(244,63,94,0.5)] flex items-center gap-2 cursor-pointer active:scale-95"
                      >
                        <Play className="w-4 h-4 fill-white" />
                        <span>STREAM PREMIERE</span>
                      </button>
                      <button 
                        onClick={() => setMovieTab('player')}
                        className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-rose-200 hover:text-white border border-rose-500/40 font-mono text-xs font-bold tracking-wider transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                      >
                        <Tv className="w-3.5 h-3.5 text-rose-400" />
                        <span>THEATER VIEW</span>
                      </button>
                    </div>

                    {/* Credits Chips */}
                    <div className="flex gap-4 items-center text-[10px] font-mono text-slate-400 pt-1 border-t border-white/10">
                      <span>Director: <strong className="text-rose-300 font-semibold">{currentMovie.director}</strong></span>
                      <span>·</span>
                      <span>Starring: <strong className="text-slate-300 font-normal">{currentMovie.cast.join(', ')}</strong></span>
                    </div>
                  </div>

                  {/* Right Column: Symmetrical 3D Holographic Film Projection Preview */}
                  <div className="w-full lg:w-72 shrink-0 aspect-video rounded-2xl overflow-hidden relative border border-rose-500/40 bg-black/70 shadow-2xl flex items-center justify-center group cursor-pointer" onClick={() => selectAndPlayMovie(currentMovie)}>
                    <div className={`absolute inset-0 bg-gradient-to-tr ${currentMovie.posterGradient} opacity-40 group-hover:opacity-60 transition-opacity`} />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-14 h-14 rounded-full bg-rose-500/80 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-[0_0_30px_rgba(244,63,94,0.7)] group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2.5 left-3 z-10 text-[9px] font-mono font-bold text-rose-200 tracking-wider">
                      <span>4K ULTRA HD · CINEMASCOPE</span>
                    </div>
                  </div>
                </div>

                {/* Symmetrical Filter and Search Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="relative w-full sm:w-80">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-rose-400" />
                    <input 
                      type="text" 
                      placeholder="Search films, directors or genres..."
                      value={movieSearch}
                      onChange={(e) => setMovieSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-black/40 border border-white/10 rounded-xl text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-rose-500/50 backdrop-blur-md"
                    />
                  </div>

                  {/* Symmetrical Genre Filter Chips */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {['all', 'Sci-Fi', 'Ambient', 'Visual Novel'].map(genre => (
                      <button
                        key={genre}
                        onClick={() => setMovieGenreFilter(genre.toLowerCase())}
                        className={`jewel-chip ${movieGenreFilter === genre.toLowerCase() ? 'jewel-chip-active-rose' : 'text-slate-300 hover:text-white'}`}
                      >
                        <span>{genre === 'all' ? 'ALL TITLES' : genre.toUpperCase()}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Balanced Symmetrical 3-Column Cinema Collection Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {filteredMovies.map(movie => (
                    <div 
                      key={movie.id}
                      onClick={() => selectAndPlayMovie(movie)}
                      className="p-5 cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[220px] shadow-xl group liquid-glass-panel border-white/10 hover:border-rose-500/50 hover:-translate-y-1 rounded-2xl"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-tr ${movie.posterGradient} opacity-20 pointer-events-none group-hover:opacity-35 transition-opacity`} />
                      
                      <div className="relative z-10 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[8.5px] font-mono font-bold tracking-wider">
                            {movie.rating} · {movie.year}
                          </span>
                          <span className="text-[9px] font-mono text-slate-400 font-semibold flex items-center gap-1">
                            <Clock className="w-3 h-3 text-rose-400/80" />
                            {movie.duration}
                          </span>
                        </div>
                        <h4 className="text-base font-extrabold text-white group-hover:text-rose-200 transition-colors font-sans">{movie.title}</h4>
                        <p className="text-[11px] text-slate-300 line-clamp-3 leading-relaxed font-sans">{movie.description}</p>
                      </div>

                      <div className="relative z-10 pt-3 border-t border-white/10 flex justify-between items-center text-[9px] font-mono">
                        <span className="text-rose-300 font-bold bg-black/40 px-2 py-0.5 rounded border border-white/10">{movie.genre}</span>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 group-hover:bg-rose-500 text-rose-200 group-hover:text-white transition-all border border-rose-500/40 shadow">
                          <span>PLAY</span>
                          <Play className="w-3 h-3 fill-current" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* --- THEATER PLAYER TAB (BALANCED WIDESCREEN & SYMMETRICAL MASTER CONSOLE) --- */}
            {movieTab === 'player' && (
              <div className="space-y-5 animate-fadeIn">
                
                {/* Widescreen Cinema Theater Projection Screen with Dynamic Backlight */}
                <div className="w-full bg-black/70 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative aspect-video flex items-center justify-center group">
                  <canvas ref={movieCanvasRef} className="w-full h-full block" />
                  
                  {/* Atmospheric Edge Glow Backlight (Matches Current Film Atmosphere) */}
                  <div 
                    className="absolute inset-0 pointer-events-none transition-all duration-1000"
                    style={{
                      boxShadow: `inset 0 0 75px ${currentMovie.videoColor}`,
                      opacity: isPlaying ? 0.85 : 0.25
                    }}
                  />

                  {/* Top Screening Overlay Status Bar */}
                  <div className="absolute top-4 left-5 right-5 flex justify-between items-center z-20 pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[9px] font-mono text-rose-200 tracking-wider flex items-center gap-1.5 shadow">
                      <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-rose-400 animate-ping' : 'bg-slate-500'}`} />
                      <span>SCREENING: {currentMovie.title}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[9px] font-mono text-slate-300">
                      24.000 FPS TRUE-RATE
                    </span>
                  </div>
                </div>

                {/* Symmetrical Master Theater Console Deck */}
                <div className="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl space-y-4">
                  
                  {/* Progress Line with Timecode */}
                  <div className="w-full space-y-1.5">
                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                      <span className="text-rose-300 font-bold font-mono">
                        {Math.floor(movieProgress * 1.34)}:{(Math.floor(movieProgress * 2.8) % 60).toString().padStart(2, '0')}
                      </span>
                      <span className="text-slate-400 font-mono">CHAPTER 02 · {currentMovie.duration}</span>
                    </div>
                    <div 
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        const newPct = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
                        setMovieProgress(newPct);
                      }}
                      className="w-full h-2 bg-white/10 hover:h-2.5 rounded-full overflow-hidden cursor-pointer transition-all relative"
                    >
                      <div className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(244,63,94,0.8)]" style={{ width: `${movieProgress}%` }} />
                    </div>
                  </div>

                  {/* Mathematically Symmetrical 3-Flank Console Controls */}
                  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 pt-1">
                    
                    {/* Left Flank: Volume & Soundstage */}
                    <div className="flex items-center gap-2.5 justify-start">
                      <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-mono text-slate-300">
                        <Volume2 className="w-3.5 h-3.5 text-rose-400" />
                        <input 
                          type="range" 
                          min="0" 
                          max="100" 
                          value={ambientVolume}
                          onChange={(e) => setAmbientVolume(Number(e.target.value))}
                          className="w-20 h-1 bg-white/15 rounded-lg appearance-none cursor-pointer accent-rose-500"
                        />
                        <span className="w-7 text-right text-rose-200 font-bold">{ambientVolume}%</span>
                      </div>
                      <span className="px-2 py-1 rounded-full bg-black/30 border border-white/10 text-[9px] font-mono text-slate-400 hidden sm:inline">
                        DOLBY 7.1
                      </span>
                    </div>

                    {/* Center Flank: Symmetrical 5-Button Transport Deck */}
                    <div className="flex justify-center items-center gap-4">
                      <button 
                        onClick={() => setMovieProgress(0)} 
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all active:scale-95 cursor-pointer border border-white/10"
                        title="Restart Film"
                      >
                        <SkipBack className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => setMovieProgress(p => Math.max(0, p - 5))} 
                        className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all active:scale-95 cursor-pointer border border-white/10"
                        title="Rewind 10 Seconds"
                      >
                        <span className="text-[9px] font-mono font-bold">-10s</span>
                      </button>
                      
                      {/* Master Playback Orb with Radiant Crimson Glow */}
                      <button 
                        onClick={() => {
                          setIsPlaying(!isPlaying);
                          if (!isPlaying) {
                            AudioSynth.playTrack('movie');
                          } else {
                            AudioSynth.stopAll();
                          }
                        }}
                        className="w-13 h-13 rounded-full bg-gradient-to-tr from-rose-500 via-rose-600 to-pink-500 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(244,63,94,0.75)] cursor-pointer border border-rose-300/40"
                        title={isPlaying ? "Pause Screening" : "Play Screening"}
                      >
                        {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
                      </button>

                      <button 
                        onClick={() => setMovieProgress(p => Math.min(100, p + 5))} 
                        className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all active:scale-95 cursor-pointer border border-white/10"
                        title="Fast Forward 10 Seconds"
                      >
                        <span className="text-[9px] font-mono font-bold">+10s</span>
                      </button>
                      <button 
                        onClick={() => setMovieProgress(100)} 
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all active:scale-95 cursor-pointer border border-white/10"
                        title="Next Chapter"
                      >
                        <SkipForward className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Right Flank: Aspect Ratio & Formats */}
                    <div className="flex items-center gap-2 justify-end flex-wrap">
                      <button
                        onClick={() => setProjectorRatio(r => r === '16:9' ? '2.39:1' : '16:9')}
                        className="px-2.5 py-1 rounded-full bg-black/40 text-[9px] font-mono text-rose-200 border border-rose-500/30 hover:border-rose-400 font-bold transition-all cursor-pointer"
                        title="Toggle Aspect Ratio"
                      >
                        {projectorRatio}
                      </button>
                      <span className="px-2.5 py-1 rounded-full bg-black/40 text-[9px] font-mono text-slate-300 border border-white/10">
                        4K UHD · 24 FPS
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            )}

            {/* --- STUDIO ENGINE / HARDWARE TAB (SYMMETRICAL 2x2 LUXURY HOME THEATER CONSOLE) --- */}
            {movieTab === 'connect' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-fadeIn">
                
                {/* 1. Anamorphic Projector Calibration */}
                <div className="p-6 space-y-4 liquid-glass-panel border-white/10 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold tracking-widest text-rose-400 font-mono">01 · PROJECTOR CALIBRATION</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[8.5px] font-mono border border-emerald-500/40">
                        3500 LUMENS
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white font-sans">Laser Anamorphic Optics</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                      Motorized anamorphic lens adjustment and laser phosphor illumination.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <span className="text-[9px] font-mono text-slate-400 block uppercase">Aspect Ratio Mode</span>
                    <div className="grid grid-cols-2 gap-2">
                      <button 
                        onClick={() => setProjectorRatio('16:9')}
                        className={`py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                          projectorRatio === '16:9' ? 'bg-rose-500/20 border-rose-500 text-rose-200 shadow' : 'bg-black/30 border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        16:9 Standard
                      </button>
                      <button 
                        onClick={() => setProjectorRatio('2.39:1')}
                        className={`py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                          projectorRatio === '2.39:1' ? 'bg-rose-500/20 border-rose-500 text-rose-200 shadow' : 'bg-black/30 border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        2.39:1 CinemaScope
                      </button>
                    </div>

                    <button 
                      onClick={() => setIsShutterOpen(!isShutterOpen)}
                      className={`w-full py-2 rounded-xl text-xs font-mono font-bold transition-all border flex items-center justify-center gap-2 mt-2 ${
                        isShutterOpen ? 'bg-black/40 border-rose-500/40 text-rose-300' : 'bg-rose-950/60 border-rose-500 text-white'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${isShutterOpen ? 'bg-emerald-400' : 'bg-rose-500'}`} />
                      <span>{isShutterOpen ? 'SHUTTER: OPEN (ACTIVE)' : 'SHUTTER: STANDBY'}</span>
                    </button>
                  </div>
                </div>

                {/* 2. Theater Lighting & Dimmer Engine */}
                <div className="p-6 space-y-4 liquid-glass-panel border-white/10 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold tracking-widest text-rose-400 font-mono">02 · THEATER AMBIANCE</span>
                      <span className="text-[9px] font-mono text-rose-300 font-bold">DIMMER: {lightDimmers}%</span>
                    </div>
                    <h3 className="text-sm font-bold text-white font-sans">Smart Cinema Dimmer</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                      Synchronized ambient color glow and motorized room lighting level.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-white/10">
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={lightDimmers}
                      onChange={(e) => setLightDimmers(Number(e.target.value))}
                      className="w-full h-1.5 bg-white/15 rounded-lg appearance-none cursor-pointer accent-rose-500"
                    />

                    <span className="text-[9px] font-mono text-slate-400 block uppercase">Lighting Atmosphere Presets</span>
                    <div className="grid grid-cols-4 gap-1.5 text-center">
                      {[
                        { label: 'BLACKOUT', val: 0, key: 'blackout' },
                        { label: 'VELVET', val: 15, key: 'velvet' },
                        { label: 'TWILIGHT', val: 40, key: 'twilight' },
                        { label: 'LOUNGE', val: 75, key: 'lounge' }
                      ].map(preset => (
                        <button
                          key={preset.key}
                          onClick={() => {
                            setCinemaPreset(preset.key as any);
                            setLightDimmers(preset.val);
                          }}
                          className={`py-1.5 rounded-lg text-[9px] font-mono font-bold border transition-all ${
                            cinemaPreset === preset.key ? 'bg-rose-500/25 border-rose-500 text-rose-200' : 'bg-black/30 border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. 7.1.4 Dolby Atmos Spatial Acoustic Soundstage */}
                <div className="p-6 space-y-4 liquid-glass-panel border-white/10 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold tracking-widest text-rose-400 font-mono">03 · SPATIAL AUDIO</span>
                      <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[8.5px] font-mono border border-rose-500/40">
                        7.1.4 ATMOS
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white font-sans">Acoustic Soundstage Array</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                      Multi-channel object-based spatial rendering with height overhead drivers.
                    </p>
                  </div>

                  <div className="p-3 bg-black/40 rounded-xl border border-white/10 space-y-2">
                    <div className="grid grid-cols-5 gap-1 text-center text-[8.5px] font-mono">
                      <div className="p-1.5 rounded bg-white/5 border border-white/10 text-slate-300">L</div>
                      <div className="p-1.5 rounded bg-white/5 border border-white/10 text-slate-300">C</div>
                      <div className="p-1.5 rounded bg-white/5 border border-white/10 text-slate-300">R</div>
                      <div className="p-1.5 rounded bg-rose-500/20 border border-rose-500/40 text-rose-300">LFE</div>
                      <div className="p-1.5 rounded bg-white/5 border border-white/10 text-slate-300">SUR</div>
                    </div>
                    <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 pt-1">
                      <span>Lossless 24-bit / 96kHz</span>
                      <span className="text-emerald-400 font-bold">ALL CHANNELS SYNCED</span>
                    </div>
                  </div>
                </div>

                {/* 4. Wireless Cinema Sync Engine */}
                <div className="p-6 space-y-4 liquid-glass-panel border-white/10 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold tracking-widest text-rose-400 font-mono">04 · HARDWARE LINK</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[8.5px] font-mono border border-emerald-500/40">
                        2.4ms LATENCY
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white font-sans">Zero-Delay AV Bridge</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                      High-throughput optical and eARC link with lip-sync auto-calibration.
                    </p>
                  </div>

                  <div className="p-3 bg-black/40 rounded-xl border border-white/10 space-y-2 text-[9px] font-mono">
                    <div className="flex justify-between items-center text-slate-300">
                      <span>HDMI eARC 2.1 Interface</span>
                      <span className="text-rose-300 font-bold">48 Gbps Bandwidth</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                      <span>Frame Refresh Synchronization</span>
                      <span className="text-emerald-400 font-bold">24.000 Hz Locked</span>
                    </div>
                  </div>
                </div>

              </div>
            )}

          </div>
        )}

        {/* ========================================================= */}
        {/* === VIEW 4: STANDALONE WIDESCREEN COMMUNITY HUB (SOCIAL HUB) === */}
        {/* ========================================================= */}
        {currentWorld === 'community' && (
          <div className="w-full max-w-5xl space-y-6 animate-fadeIn py-4">
            
            {/* Top Compact Navigation Bar (3-Zone Balanced Architecture) */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shrink-0 shadow-lg">
              {/* Left Zone: Compact Home Pill & Network Status */}
              <div className="flex items-center gap-2.5">
                <button 
                  onClick={() => handleTravel('portal')}
                  className="compact-back-pill bg-white/5 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all cursor-pointer active:scale-95"
                  title="Return to Home Portal"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>HOME</span>
                </button>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-cyan-500/20 text-[9px] font-mono text-cyan-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_#06b6d4]" />
                  <span>NEURAL NETWORK</span>
                </div>
              </div>

              {/* Center Zone: Symmetrical Community Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-black/40 rounded-full border border-white/10 backdrop-blur-md">
                <button 
                  onClick={() => setCommunityTab('chat')}
                  className={`jewel-chip ${communityTab === 'chat' ? 'jewel-chip-active-cyan' : 'text-slate-300 hover:text-white'}`}
                >
                  <Users className="w-3 h-3 text-cyan-400" />
                  <span>CHAT</span>
                </button>
                <button 
                  onClick={() => setCommunityTab('realms')}
                  className={`jewel-chip ${communityTab === 'realms' ? 'jewel-chip-active-cyan' : 'text-slate-300 hover:text-white'}`}
                >
                  <Compass className="w-3 h-3 text-cyan-400" />
                  <span>ORBITS</span>
                </button>
                <button 
                  onClick={() => setCommunityTab('live')}
                  className={`jewel-chip ${communityTab === 'live' ? 'jewel-chip-active-cyan' : 'text-slate-300 hover:text-white'}`}
                >
                  <Radio className="w-3 h-3 text-cyan-400" />
                  <span>LIVE</span>
                </button>
                <button 
                  onClick={() => setCommunityTab('events')}
                  className={`jewel-chip ${communityTab === 'events' ? 'jewel-chip-active-cyan' : 'text-slate-300 hover:text-white'}`}
                >
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  <span>EVENTS</span>
                </button>
              </div>

              {/* Right Zone: Social Badge */}
              <div className="flex items-center gap-2 text-[9.5px] font-mono text-cyan-200 font-bold tracking-wider bg-black/40 px-3 py-1.5 rounded-full border border-cyan-500/30 shadow">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
                <span>SOCIAL 03 · 128 NODES</span>
              </div>
            </div>

            {/* --- CHAT TAB --- */}
            {communityTab === 'chat' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                <div className="lg:col-span-5 p-5 space-y-4 liquid-glass-panel">
                  <h3 className="text-[10px] font-bold tracking-widest text-cyan-400 font-mono">COMPOSE</h3>
                  
                  <form onSubmit={handleSendPost} className="space-y-3">
                    <textarea 
                      placeholder="Type a message..."
                      value={chatMessageText}
                      onChange={(e) => setChatMessageText(e.target.value)}
                      className="w-full h-20 bg-black/40 border border-white/5 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 resize-none font-sans"
                    />

                    <div className="space-y-2">
                      <select 
                        value={attachedTrackId}
                        onChange={(e) => setAttachedTrackId(e.target.value)}
                        className="w-full bg-black/40 border border-white/5 rounded-xl px-3 py-2 text-[10px] text-slate-300 focus:outline-none"
                      >
                        <option value="">Attach recording</option>
                        {AURA_TRACKS.map(t => (
                          <option key={t.id} value={t.id}>{t.title}</option>
                        ))}
                      </select>
                    </div>

                    <button 
                      type="submit"
                      disabled={!chatMessageText.trim()}
                      className="w-full h-10 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold rounded-xl transition-all disabled:opacity-40 disabled:pointer-events-none active:scale-[0.98]"
                    >
                      SEND
                    </button>
                  </form>
                </div>

                <div className="lg:col-span-7 space-y-3 max-h-[350px] overflow-y-auto pr-1 scrollbar-thin">
                  {socialPosts.map(post => {
                    const avatar = getAvatarColors(post.avatarSeed);
                    return (
                      <div key={post.id} className="p-4 space-y-2.5 relative liquid-glass-panel border-white/5">
                        <div className="flex justify-between items-center text-[10px] font-mono">
                          <div className="flex items-center gap-2">
                            <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-[8px] font-bold ${avatar.bg}`}>
                              {avatar.text[0]}
                            </span>
                            <span className="text-slate-300 font-semibold">{post.author}</span>
                          </div>
                          <span className="text-slate-500">{post.timestamp}</span>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed font-sans">{post.content}</p>

                        {post.attachedTrackId && (() => {
                          const att = AURA_TRACKS.find(t => t.id === post.attachedTrackId);
                          if (!att) return null;
                          return (
                            <div 
                              onClick={() => selectAndPlayTrack(att)}
                              className="flex items-center justify-between p-2 bg-black/35 rounded-xl border border-white/5 cursor-pointer hover:border-cyan-500/20"
                            >
                              <span className="text-[10px] text-slate-300 truncate font-semibold">{att.title}</span>
                              <Play className="w-3 h-3 text-cyan-400 fill-cyan-400/10" />
                            </div>
                          );
                        })()}

                        <div className="flex gap-2 pt-1 border-t border-white/5">
                          <button 
                            onClick={() => handlePostReact(post.id, 'love')}
                            className={`flex items-center gap-1.5 text-[9px] font-mono px-2 py-0.5 rounded-full border transition-all active:scale-95 ${
                              post.hasReacted.love ? 'bg-rose-950/40 border-rose-500/40 text-rose-300' : 'bg-slate-950/40 border-slate-800 text-slate-500 hover:text-slate-300'
                            }`}
                          >
                            <Heart className="w-2.5 h-2.5" />
                            <span>{post.reactions.love}</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            )}

            {/* --- ORBITS TAB --- */}
            {communityTab === 'realms' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center animate-fadeIn">
                <div className="md:col-span-8 relative aspect-video w-full rounded-2xl bg-black/40 border border-white/5 overflow-hidden flex items-center justify-center p-4">
                  <div className="absolute w-[95%] h-[95%] rounded-full border border-dashed border-white/5 animate-spin" />
                  <div className="absolute w-[75%] h-[75%] rounded-full border border-dashed border-white/10 animate-spin" />
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/35 flex items-center justify-center text-white text-[9px] font-mono font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                    AURA
                  </div>

                  <button 
                    onClick={() => selectAndPlayTrack(AURA_TRACKS[0])}
                    className="absolute top-12 left-1/4 p-1.5 rounded-full bg-slate-900 border border-amber-500 text-[8px] font-mono font-bold text-amber-300 z-30 shadow"
                  >
                    Cabin Vibe
                  </button>
                </div>

                <div className="md:col-span-4 p-5 space-y-2 liquid-glass-panel">
                  <h4 className="text-xs font-bold text-cyan-400 font-mono">ALIGNMENT</h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed">
                    Select orbital nodes to sync system receivers.
                  </p>
                </div>
              </div>
            )}

            {/* --- LIVE STREAMS TAB --- */}
            {communityTab === 'live' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {AURA_STREAMS.map(stream => (
                    <div 
                      key={stream.id}
                      className="p-4 relative overflow-hidden flex flex-col justify-between min-h-[140px] shadow-lg liquid-glass-panel border-white/5"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-tr ${stream.gradient} opacity-15 pointer-events-none`} />
                      
                      <div className="relative z-10 flex justify-between items-center text-[9px] font-mono">
                        <div className="flex items-center gap-1.5 text-cyan-400 font-bold uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                          <span>LIVE</span>
                        </div>
                        <span className="text-slate-400 font-mono">{stream.viewers.toLocaleString()} active</span>
                      </div>

                      <div className="relative z-10 pt-4 flex justify-between items-end">
                        <div>
                          <h4 className="text-xs font-bold text-slate-200">{stream.channel}</h4>
                        </div>
                        <button 
                          onClick={() => {
                            if (stream.category === 'Music') {
                              selectAndPlayTrack(AURA_TRACKS[1]);
                            } else {
                              AudioSynth.playTrack('movie');
                              setIsPlaying(true);
                            }
                          }}
                          className="px-2.5 py-1 bg-cyan-500 text-slate-950 text-[9px] font-mono font-bold rounded-lg hover:bg-cyan-400 transition-colors"
                        >
                          TUNE IN
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* --- EVENTS TAB --- */}
            {communityTab === 'events' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
                {eventsList.map(ev => (
                  <div key={ev.id} className="p-4 space-y-3 relative overflow-hidden shadow-lg liquid-glass-panel border-white/5">
                    <div className="flex justify-between items-start text-[10px] font-mono">
                      <span className="text-cyan-400 font-bold uppercase tracking-wider">{ev.date} · {ev.time}</span>
                      <span className="text-slate-400">{ev.attendeesCount} RSVP</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-200">{ev.title}</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-sans">{ev.description}</p>

                    <div className="pt-2 border-t border-white/5 flex justify-end">
                      <button 
                        onClick={() => handleToggleRSVP(ev.id)}
                        className={`px-3 py-1.5 text-[9px] font-mono border rounded-lg transition-all active:scale-95 font-bold ${
                          ev.rsvpStatus === 'going' ? 'bg-cyan-950 border-cyan-500 text-cyan-300' : 'bg-black/40 border-white/10 text-slate-500'
                        }`}
                      >
                        {ev.rsvpStatus === 'going' ? 'GOING' : 'REXP TO PARTY'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        )}

      </main>

      <footer className="relative z-10 w-full bg-slate-950/20 border-t border-white/5 py-4 text-center text-[9px] text-slate-600 font-mono tracking-widest mt-auto shrink-0">
        &copy; 2026 AURA SYSTEMS INC. LIQUID GLASS ENGINE.
      </footer>

    </div>
  );
}
