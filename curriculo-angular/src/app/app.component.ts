import { Component } from '@angular/core';
import { AppData } from './models/app-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'curriculo-angular';
  showForm: boolean = false;

  public data: AppData = {
    imagePath: 'assets/images/foto-perfil-grupo.jpeg',
    name: 'Jane Doe',
    informations: [
      {
        icon: 'fa-briefcase',
        information: 'Designer',
      },
      {
        icon: 'fa-home',
        information: 'London, UK',
        href: 'https://www.google.com/maps/place/Londres,+Reino+Unido/@51.5286416,-0.1015987,11z/data=!3m1!4b1!4m6!3m5!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw?entry=ttu',
      },
      {
        icon: 'fa-envelope',
        information: 'ex@mail.com',
        href: 'mailto:',
      },
      {
        icon: 'fa-phone',
        information: '1224435534',
        href: 'tel:+44',
      },
    ],
    skills: [
      {
        sectionIcon: 'fa-asterisk',
        sectionTitle: 'Skills',
        skillItem: [
          {
            itemTitle: 'Adobe Photoshop',
            width: '90%',
            isWidthVisible: true,
          },
          {
            itemTitle: 'Photography',
            width: '80%',
            isWidthVisible: true,
          },
          {
            itemTitle: 'Illustrator',
            width: '75%',
            isWidthVisible: true,
          },
          {
            itemTitle: 'Media',
            width: '50%',
            isWidthVisible: true,
          },
        ],
      },
      {
        sectionIcon: 'fa-globe',
        sectionTitle: 'Languages',
        skillItem: [
          {
            itemTitle: 'English',
            width: '100%',
            isWidthVisible: false,
          },
          {
            itemTitle: 'Spanish',
            width: '55%',
            isWidthVisible: false,
          },
          {
            itemTitle: 'German',
            width: '25%',
            isWidthVisible: false,
          },
        ],
      },
    ],
    experiences: [
      {
        experienceIcon: 'fa-suitcase',
        experienceTitle: 'Work Experience',
        experienceItem: [
          {
            experienceSubTitle: 'Front End Developer / w3schools.com',
            startDate: 'Jan 2015',
            endDate: 'Current',
            content:
              'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.',
          },
          {
            experienceSubTitle: 'Web Developer / something.com',
            startDate: 'Mar 2012',
            endDate: 'Dec 2014',
            content:
              'Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.',
          },
          {
            experienceSubTitle: 'Graphic Designer / designsomething.com',
            startDate: 'Jun 2010',
            endDate: 'Mar 2012',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          },
        ],
      },
      {
        experienceIcon: 'fa-certificate',
        experienceTitle: 'Education',
        experienceItem: [
          {
            experienceSubTitle: 'W3Schools.com',
            startDate: 'Forever',
            endDate: '',
            content: 'Web Development! All I need to know in one place',
          },
          {
            experienceSubTitle: 'London Business School',
            startDate: '2013',
            endDate: '2015',
            content: 'Master Degree',
          },
          {
            experienceSubTitle: 'School of Coding',
            startDate: '2010',
            endDate: '2013',
            content: 'Bachelor Degree',
          },
        ],
      },
    ],
    footer: [
      {
        footerIcon: 'fa-facebook-official',
        footerHref: 'https://pt-br.facebook.com/',
      },
      {
        footerIcon: 'fa-instagram',
        footerHref: 'https://www.instagram.com/',
      },
      {
        footerIcon: 'fa-snapchat',
        footerHref: 'https://www.snapchat.com/pt-BR',
      },
      {
        footerIcon: 'fa-pinterest-p',
        footerHref: 'https://br.pinterest.com/',
      },
      {
        footerIcon: 'fa-twitter',
        footerHref: 'https://twitter.com/',
      },
      {
        footerIcon: 'fa-linkedin',
        footerHref:
          'https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo',
      },
    ],
  };

  onShowForm() {
    this.showForm = true;
  }

  onHideForm() {
    this.showForm = false;
  }
}
