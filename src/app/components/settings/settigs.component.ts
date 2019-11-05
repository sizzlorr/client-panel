import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Settings } from '../../models/Settings';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settigs',
  templateUrl: './settigs.component.html',
  styleUrls: ['./settigs.component.scss']
})
export class SettigsComponent implements OnInit {
  settings: Settings;

  constructor(
    private router: Router,
    private flashMessages: FlashMessagesService,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }

  onSubmit() {
    this.settingsService.changeSettings(this.settings);
    console.log('---> ', this.settings);
    this.flashMessages.show('Settings saved!', {
      cssClass: 'alert-success',
      timeout: 4000
    });
  }
}
