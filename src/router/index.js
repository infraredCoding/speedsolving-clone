import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/home'
import Forum from '../views/forum'
import Resources from '../views/resources'
import Login from '../views/login'
import Register from '../views/register'

import CategoriesView from '../views/forumPage/categories'
import TopicsView from '../views/forumPage/topics'
import ThreadView from '../views/forumPage/thread'

import Interview from '../views/interview'
import InterviewList from '../views/interviewPage/interviewList'
import IntDetails from '../views/interviewPage/interviewDetails'


const routes = [
    {path: '/', name: 'Home', component: Index},
    
    {
        path: '/forum',
        name: 'Forum',
        component: Forum,
        children: [
            {path: '', name: 'ForumCategories', component: CategoriesView},
            {path: '/forum/topic/', name: 'ForumTopics', component: TopicsView},
            {path: '/forum/threadid/', name: 'ForumThread', component: ThreadView}
        ]
    },

    {
        path: '/interview',
        name: 'InterView',
        component: Interview,
        children: [
            {path: '', name: 'InterviewList', component: InterviewList},
            {path: '/interview/some-guy/', name: 'InterviweDetails', component: IntDetails},
        ]
    },

    {path: '/resources', name: 'Resources', component: Resources},

    {path: '/login', name: 'Login', component: Login},

    {path: '/register', name: 'Register', component: Register},
    

]


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior () {
        return { top: 0 }
    }
})

export default router;