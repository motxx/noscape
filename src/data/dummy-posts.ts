import user1Image from '../assets/images/example/waifu.png'
import user2Image from '../assets/images/example/man.jpg'
import user1Media from '../assets/images/example/scene.jpg'
import user2Media from '../assets/images/example/manga.jpg'
import { PostItemType } from '../global/types'

type PostTypeWithId = PostItemType & { id: string }
export const posts: PostTypeWithId[] = [
  {
    id: '1',
    userId: 'riel.pages.dev',
    userName: 'riel@休職中',
    verified: false,
    content: '#PublicDomain #風景画',
    replies: 0,
    likes: 20000,
    reposts: 100,
    zaps: 17000,
    userImage: user1Image,
    timestamp: '1 hours ago',
    mediaUrl: user1Media,
    mediaType: 'image',
    following: true,
  },
  {
    id: '2',
    userId: 'Ai_Manga',
    userName: 'AI Manga Artist',
    verified: true,
    content: 'AI漫画を始めました #AI漫画 #AI絵師と繋がりたい',
    replies: 0,
    likes: 1645,
    reposts: 13,
    zaps: 63,
    userImage: user2Image,
    timestamp: '2 hours ago',
    mediaUrl: user2Media,
    mediaType: 'image',
    following: false,
  },
  {
    id: '3',
    userId: 'emiliod',
    userName: 'Emilio Drake',
    verified: true,
    content:
      'This is the long long long post. This is the long long long post.This is the long long long post. This is the long long long post. This is the long long long post. This is the long long long post. This is the long long long post. This is the long long long post.',
    replies: 0,
    likes: 5,
    reposts: 0,
    zaps: 0,
    userImage: user2Image,
    timestamp: '3 hours ago',
    mediaUrl:
      'https://image.lexica.art/full_webp/d62a2a27-a997-4dbe-bc01-4f81f158f3d9',
    mediaType: 'image',
    following: false,
  },
  {
    id: '4',
    userId: 'emiliod',
    userName: 'Emilio Drake',
    verified: true,
    content: 'mp4 video file',
    replies: 0,
    likes: 100,
    reposts: 5,
    zaps: 35,
    userImage: user2Image,
    timestamp: '3 hours ago',
    mediaUrl:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    mediaType: 'video-file',
    following: false,
  },
  {
    id: '5',
    userId: 'riel.pages.dev',
    userName: 'riel@休職中',
    verified: false,
    content: 'おすすめのVTuberです!!',
    replies: 0,
    likes: 20,
    reposts: 2,
    zaps: 39,
    userImage: user1Image,
    timestamp: '3 hours ago',
    mediaUrl: 'https://www.youtube.com/watch?v=W7q8cHY91Ew',
    mediaType: 'video-youtube',
    following: false,
  },
  {
    id: '6',
    userId: 'riel.pages.dev',
    userName: 'riel@休職中',
    verified: false,
    content:
      '#this_is-a.hashtag@test test hoge #test aaaa\nbbbb\nccc#c#ccc\nhoge/fug#a#\\piyo#.com#$#{}#}',
    replies: 0,
    likes: 20000,
    reposts: 100,
    zaps: 17000,
    userImage: user1Image,
    timestamp: '1 hours ago',
    mediaUrl: user1Media,
    mediaType: 'image',
    following: true,
  },
  {
    id: '7',
    userId: 'riel.pages.dev',
    userName: 'riel@休職中',
    verified: false,
    content: '#PublicDomain #風景画',
    replies: 0,
    likes: 20000,
    reposts: 100,
    zaps: 17000,
    userImage: user1Image,
    timestamp: '1 hours ago',
    mediaUrl: user1Media,
    mediaType: 'image',
    following: true,
  },
  {
    id: '8',
    userId: 'riel.pages.dev',
    userName: 'riel@休職中',
    verified: false,
    content: '#PublicDomain #風景画',
    replies: 0,
    likes: 20000,
    reposts: 100,
    zaps: 17000,
    userImage: user1Image,
    timestamp: '1 hours ago',
    mediaUrl: user1Media,
    mediaType: 'image',
    following: true,
  },
  {
    id: '9',
    userId: 'riel.pages.dev',
    userName: 'riel@休職中',
    verified: false,
    content: '#PublicDomain #風景画',
    replies: 0,
    likes: 20000,
    reposts: 100,
    zaps: 17000,
    userImage: user1Image,
    timestamp: '1 hours ago',
    mediaUrl: user1Media,
    mediaType: 'image',
    following: true,
  },
  {
    id: '10',
    userId: 'riel.pages.dev',
    userName: 'riel@休職中',
    verified: false,
    content: '#PublicDomain #風景画',
    replies: 0,
    likes: 20000,
    reposts: 100,
    zaps: 17000,
    userImage: user1Image,
    timestamp: '1 hours ago',
    mediaUrl: user1Media,
    mediaType: 'image',
    following: true,
  },
  {
    id: '11',
    userId: 'riel.pages.dev',
    userName: 'riel@休職中',
    verified: false,
    content: '#PublicDomain #風景画',
    replies: 0,
    likes: 20000,
    reposts: 100,
    zaps: 17000,
    userImage: user1Image,
    timestamp: '1 hours ago',
    mediaUrl: user1Media,
    mediaType: 'image',
    following: true,
  },
  {
    id: '12',
    userId: 'riel.pages.dev',
    userName: 'riel@休職中',
    verified: false,
    content: '#PublicDomain #風景画',
    replies: 0,
    likes: 20000,
    reposts: 100,
    zaps: 17000,
    userImage: user1Image,
    timestamp: '1 hours ago',
    mediaUrl: user1Media,
    mediaType: 'image',
    following: true,
  },
  {
    id: '13',
    userId: 'riel.pages.dev',
    userName: 'riel@休職中',
    verified: false,
    content: '#PublicDomain #風景画',
    replies: 0,
    likes: 20000,
    reposts: 100,
    zaps: 17000,
    userImage: user1Image,
    timestamp: '1 hours ago',
    mediaUrl: user1Media,
    mediaType: 'image',
    following: true,
  },
  {
    id: '14',
    userId: 'riel.pages.dev',
    userName: 'riel@休職中',
    verified: false,
    content: '#PublicDomain #風景画',
    replies: 0,
    likes: 20000,
    reposts: 100,
    zaps: 17000,
    userImage: user1Image,
    timestamp: '1 hours ago',
    mediaUrl: user1Media,
    mediaType: 'image',
    following: true,
  },
]
