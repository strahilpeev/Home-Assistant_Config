# Pinkywafer Home Assistant Config

[![Build Status](https://travis-ci.com/pinkywafer/Home-Assistant_Config.svg?branch=master)](https://travis-ci.com/pinkywafer/Home-Assistant_Config)

[![Buy me a coffee](https://img.shields.io/static/v1.svg?label=Buy%20me%20a%20coffee&logo=buy%20me%20a%20coffee&logoColor=white&labelColor=ff69b4&message=donate&color=Black)](https://www.buymeacoffee.com/V3q9id4)

[![Support Pinkywafer on Patreon][patreon-shield]][patreon]

This is my live Home Assistant config. 
It runs on an [XCY X30 Intel i7 4500U from banggood](https://www.banggood.com/XCY-X30-Mini-PC-Intel-Core-I7-4500U-Barebone-1_8GHz-Intel-HD-Graphics-4200-Windows-10-Dual-Core-Fanless-Mini-Desktop-PC-HDMI-VGA-WiFi-Nettop-HTPC-p-1479424.html)
Proxmox is installed on bare metal,  then this (production) Home Assistant runs in a VM.
A separate VM provides my Dev. env

This repo is validated by Travis CI

I also have containers for file sharing (nas), plex server, and a tuya convert container.

## Some statistics about my installation:

Number of entities: 409

Type | Qty
-- | --
Alarm Control Panel | 1
Alert | 0
Automation | 59
Binary Sensor | 83
Camera | 3
Device Tracker | 23
Group | 6
Input Boolean | 1
Input Datetime | 1
Input Text | 3
Light | 16
Media Player | 14
Person | 3
Scene | 1
Script | 50
Sensor | 116
Sun | 1
Switch | 22
Weather | 1
Zone | 4



## custom_components installed

* [Anniversaries](https://github.com/pinkywafer/Anniversaries)

* [Garbage Collection](https://github.com/bruxy70/Garbage-Collection/)

* [Breaking Changes](https://github.com/custom-components/breaking_changes)

* [HACS (Home Assistant Community Store)](https://hacs.xyz/docs/configuration/start)

* [Calendarific](https://github.com/pinkywafer/Calendarific)

* [Browser mod]()

* [Youtube Sensor](https://github.com/custom-components/youtube)

* [Authenticated](https://github.com/custom-components/authenticated)

* [Generate readme](https://github.com/custom-components/readme)

_Generates this readme file._


***

Generated by the [custom readme integration](https://github.com/custom-components/readme)

[patreon-shield]: https://c5.patreon.com/external/logo/become_a_patron_button.png
[patreon]: https://www.patreon.com/pinkywafer