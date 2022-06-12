import { createApp } from 'vue';

import App from './App.vue';

import BaseCard from '../src/components/UI/BaseCard';
import BaseButton from '../src/components/UI/BaseButton';
import BaseDialog from '../src/components/UI/BaseDialog';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
