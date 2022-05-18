import { IconConfig, ImgConfig } from "src/properties";

export enum orientations{
  vertical = 'vertical',
  horizontal = 'horizontal'
};

export const APP_CONFIG: any = {
  title: 'Company Name',
  description: 'Company Description',
  orientation: orientations.vertical
};

export const ASSET_CONFIG: ImgConfig[] =[
    {
        src: '/assets/imgs/404.jpg',
        alt: 'Page Not Found',
        title: '404 Error',
        id: '404-img',
    },
    {
      src: '/assets/svgs/logo.svg',
      alt: 'Logo alt goes here',
      aria_label: 'Company is good',
      title: 'Company Logo',
      id: 'logo-img',
    }
];

export const ICON_CONFIG: IconConfig[] = [
    {
      src: '../assets/svgs/icons/archive-badge.svg',
      name: 'archive_badge',
    },
    {
      src: '../assets/svgs/icons/bell-badge.svg',
      name: 'bell_badge',
    },
    {
      src: '../assets/svgs/icons/bitcoin.svg',
      name: 'bitcoin',
    },
    {
      src: '../assets/svgs/icons/blog.svg',
      name: 'blog',
    },
    {
        src: '../assets/svgs/icons/briefcase-badge.svg',
        name: 'briefcase_badge'
    },
    {
      src: '../assets/svgs/icons/calculator.svg',
      name: 'calculator',
    },
    {
      src: '../assets/svgs/icons/calendar-badge.svg',
      name: 'calendar_badge',
    },
    {
      src: '../assets/svgs/icons/cash.svg',
      name: 'cash',
    },
    {
      src: '../assets/svgs/icons/chat-badge.svg',
      name: 'chat_badge',
    },
    {
      src: '../assets/svgs/icons/clock-badge.svg',
      name: 'clock_badge',
    },
    {
      src: '../assets/svgs/icons/cloud-badge.svg',
      name: 'cloud_badge',
    },
    {
      src: '../assets/svgs/icons/cloud-computing-badge.svg',
      name: 'cloud_compute_badge',
    },
    {
      src: '../assets/svgs/icons/cloud-download.svg',
      name: 'cloud_download',
    },
    {
      src: '../assets/svgs/icons/cloud-download-inverted.svg',
      name: 'cloud_download_invert',
    },
    {
      src: '../assets/svgs/icons/cloud-upload-badge.svg',
      name: 'cloud_upload',
    },
    {
      src: '../assets/svgs/icons/cloud-outline.svg',
      name: 'cloud_outline',
    },
    {
      src: '../assets/svgs/icons/contact-badge.svg',
      name: 'contact_badge',
    },
    {
      src: '../assets/svgs/icons/discord.svg',
      name: 'discord'
    },
    {
      src: '../assets/svgs/icons/facebook.svg',
      name: 'facebook'
    },
    {
      src: '../assets/svgs/icons/floppy-disk-badge.svg',
      name: 'floppy_disk_badge'
    },
    {
      src: '../assets/svgs/icons/gimp.svg',
      name: 'gimp'
    },
    {
      src: '../assets/svgs/icons/github.svg',
      name: 'github'
    },
    {
      src: '../assets/svgs/icons/instagram.svg',
      name: 'instagram'
    },
    {
      src: '../assets/svgs/icons/lightbulb-badge.svg',
      name: 'lightbulb_badge'
    },
    {
      src: '../assets/svgs/icons/lightbulb.svg',
      name: 'lightbulb'
    },
    {
      src: '../assets/svgs/icons/linkedin.svg',
      name: 'linkedin'
    },
    {
      src: '../assets/svgs/icons/notebook-badge.svg',
      name: 'notebook_badge'
    },
    {
      src: '../assets/svgs/icons/pie-chart-badge.svg',
      name: 'piechart_badge'
    },
    {
      src: '../assets/svgs/icons/reddit.svg',
      name: 'reddit'
    },
    {
      src: '../assets/svgs/icons/shelf-badge.svg',
      name: 'shelf_badge'
    },
    {
      src: '../assets/svgs/icons/shelf-filled-badge.svg',
      name: 'shelf_filled_badge'
    },
    {
      src: '../assets/svgs/icons/speech-bubble-badge.svg',
      name: 'speech_bubble_badge'
    },
    {
      src: '../assets/svgs/icons/statistics-badge.svg',
      name: 'statistics_badge'
    },
    {
      src: '../assets/svgs/icons/sunny-inverted.svg',
      name: 'sunny_inverted'
    },
    {
      src: '../assets/svgs/icons/sunny.svg',
      name: 'sunny'
    },
    {
      src: '../assets/svgs/icons/tablet-badge.svg',
      name: 'tablet_badge'
    },
    {
      src: '../assets/svgs/icons/touch-monitor-badge',
      name: 'touch_monitor_badge'
    },
    {
      src: '../assets/svgs/icons/twitter.svg',
      name: 'twitter'
    },
];