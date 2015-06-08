'use strict';

angular.module('joanPastorWebApp')
    .controller('MainCtrl', function ($scope,$document) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.sections = [
            /*  { id: "home",
             view: "views/home.html",
             title: "Home"
             },
             {
             id:'contact',
             view: 'views/contact.html',
             title: 'Contact'
             },
             */
            /*{
             id:'publications',
             view: 'views/publications.html',
             title: 'Publications and projects'
             },
             */
            {
                id: 'phd',
                title: 'PhD',
                view: 'views/phd.html'

            },
            {
                id: 'project',
                title: 'Projects',
                view: 'views/projects.html',
                style: 'bg-primary'

            },
            {
                id: 'coding',
                title: 'Programming',
                view: 'views/coding.html'
                //style: 'bg-primary'

            },
            {
                id:'personal',
                view: 'views/personal.html',
                title: 'Personal Interests',
                style: 'bg-primary'
            },
            {
                id:'social',
                view: 'views/social.html',
                title: 'Social'
            },

        ];
        $scope.changelog = "views/changelog.html";


        $scope.urls = {
            cv: 'files/joan-pastor-cv.pdf',
            cv_eng:'files/joan-pastor-cv-en.pdf',
            april_ann:'https://github.com/pakozm/april-ann',
            github:'https://github.com/joapaspe',
            bitbucket:'https://bitbucket.org/joapaspe',
            codeforces:'http://codeforces.com/profile/joapaspe',
            uva: 'http://uhunt.felix-halim.net/id/135046',
            codejam: 'https://code.google.com/codejam',
            hackercup: 'https://www.facebook.com/hackercup',
            tuenti: 'https://contest.tuenti.net/',
            clocalprog: 'https://clocalprog.dsic.upv.es/',
            plus: 'https://plus.google.com/114143608217887742364/posts',
            linkedin: 'https://www.linkedin.com/in/joapaspe',
            facebook: 'https://www.facebook.com/joapaspe',
            twitter: 'https://twitter.com/joan_batiste',
            coursera: 'https://www.coursera.org/user/i/694ef7729912412d9263dcd905bb731b',
            webcode:"https://github.com/joapaspe/joan-pastor-web",
            joan: "http://joan.pastorpellicer.com"

        }

        // Javascript initialization

        new WOW().init();
        // Offset for Main Navigation
        $('#mainNav').affix({
            offset: {
                top: 100
            }
        })
    });

