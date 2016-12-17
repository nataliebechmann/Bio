import { Component, OnInit, ViewChild } from '@angular/core';
import { ITrack } from './track';

@Component({
    selector: 'music-player',
    templateUrl: './app/music/music-player.component.html'
})

export class MusicPlayer implements OnInit {
    tracks: ITrack[] = [
        {
            title: "Benga - Yellow",
            url: "media/Benga - Yellow.mp3"
        },
        {
            title: "Benga - Getting 42",
            url: "media/Benga - Getting 42.mp3"
        }
    ];

    @ViewChild('progressBarElement') progressBarElement;
    audioElement: HTMLAudioElement;

    activeTrack() {
        return this.tracks[this.currentTrackState.index];
    }

    public currentTrackState: any = {
        index: 0,
        playbackPercent: 0
    }

    ngOnInit() {
        this.loadTrack(0);
    }

    loadTrack(index: number) {
        var self = this;

        var shouldAutoPlay = false;

        if (this.audioElement != null) {
            shouldAutoPlay = !this.audioElement.paused;
        }

        this.setCurrentTimeByPercentage(0);
        this.pause();
        this.audioElement = new Audio(this.activeTrack().url);
        this.audioElement.ontimeupdate = function (event: Event) {
            self.updatePlaybackPercent((self.audioElement.currentTime / self.audioElement.duration) * 100)
        }
        if (shouldAutoPlay) {
            this.play();
        }
    }

    updatePlaybackPercent(percent: number) {
        this.currentTrackState.playbackPercent = percent;
    }

    play() {
        if (this.audioElement != null) {
            this.audioElement.play();
        }
    }

    pause() {
        if (this.audioElement != null) {
            this.audioElement.pause();
        }
    }

    next() {
        if (this.canGoNext()) {
            var nextTrackIndex = this.currentTrackState.index + 1;
            this.currentTrackState.index = nextTrackIndex;
            this.loadTrack(nextTrackIndex);
        }
    }

    previous() {
        if (this.canGoPrevious()) {
            var previousTrackIndex = this.currentTrackState.index - 1;
            this.currentTrackState.index = previousTrackIndex;
            this.loadTrack(previousTrackIndex);
        }
    }

    stop() {
        if (this.audioElement != null) {
            this.pause();
            this.setCurrentTimeByPercentage(0);
        }
    }

    setCurrentTimeByPercentage(percentage: number) {
        if (this.audioElement != null) {
            this.audioElement.currentTime = this.audioElement.duration / 100 * percentage;
            this.updatePlaybackPercent(percentage);
        }
    }

    onProgressBarClick(event: MouseEvent) {
        if (this.audioElement != null) {
            var newPercent = (event.offsetX / this.progressBarElement.nativeElement.clientWidth * 100);
            this.setCurrentTimeByPercentage(newPercent);
        }
    }

    canGoPrevious(): boolean {
        var previousTrackIndex = this.currentTrackState.index - 1;
        return previousTrackIndex >= 0;
    }

    canGoNext(): boolean {
        var nextTrackIndex = this.currentTrackState.index + 1;
        return nextTrackIndex < this.tracks.length;
    }
}