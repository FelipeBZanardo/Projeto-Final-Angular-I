import { Component } from '@angular/core';
import { AppData } from './models/app-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curriculo-angular';
  showForm: boolean = false;
  
  public data: AppData = {
    imagePath: 'assets/images/foto-perfil.jpg',
    name: 'Jane Doe',
    informations: [
      {
        icon: 'fa-briefcase',
        information: 'Designer'
      },
      {
        icon: 'fa-home',
        information: 'London, UK'
      },
      {
        icon: 'fa-envelope',
        information: 'ex@mail.com'
      },
      {
        icon: 'fa-phone',
        information: '1224435534'
      }
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
        }
      ]
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
        }
      ]
    }
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
            content: 'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
          },
          {
            experienceSubTitle: 'Web Developer / something.com',
            startDate: 'Mar 2012',
            endDate: 'Dec 2014',
            content: 'Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
          },
          {
            experienceSubTitle: 'Graphic Designer / designsomething.com',
            startDate: 'Jun 2010',
            endDate: 'Mar 2012',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          }
        ]
      },
      {
        experienceIcon: 'fa-certificate',
        experienceTitle: 'Education',
        experienceItem: [
          {
            experienceSubTitle: 'W3Schools.com',
            startDate: 'Forever',
            endDate: '',
            content: 'Web Development! All I need to know in one place'
          },
          {
            experienceSubTitle: 'London Business School',
            startDate: '2013',
            endDate: '2015',
            content: 'Master Degree'
          },
          {
            experienceSubTitle: 'School of Coding',
            startDate: '2010',
            endDate: '2013',
            content: 'Bachelor Degree'
          }
        ]
      },
      
    ],
    footer: [
      {
        footerIcon: 'fa-facebook-official',
        footerHref: 'https://pt-br.facebook.com/'
      },
      {
        footerIcon: 'fa-instagram',
        footerHref: 'https://www.instagram.com/'
      },
      {
        footerIcon: 'fa-snapchat',
        footerHref: 'https://www.snapchat.com/pt-BR'
      },
      {
        footerIcon: 'fa-pinterest-p',
        footerHref: 'https://br.pinterest.com/'
      },
      {
        footerIcon: 'fa-twitter',
        footerHref: 'https://twitter.com/'
      },
      {
        footerIcon: 'fa-linkedin',
        footerHref: 'https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo'
      }
    ]
  };

  onShowForm() {
this.showForm = true;
  }

  onHideForm() {
this.showForm = false;
  }
}
