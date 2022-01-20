import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistSharedService } from 'playlistSharedService/playlist-shared.service';

import { PlaylistSidebarComponent } from './playlist-sidebar.component';

describe('PlaylistSidebarComponent', () => {
  let component: PlaylistSidebarComponent;
  let fixture: ComponentFixture<PlaylistSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ PlaylistSidebarComponent ],
      providers: [PlaylistSharedService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
