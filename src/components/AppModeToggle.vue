<script setup lang="ts">
import { ref } from 'vue';
import { useCookies } from '@vueuse/integrations/useCookies'

const emit = defineEmits<{
    (e: 'update', value: boolean): void
}>()

const props = defineProps<{
    isInitialDarkMode: boolean
}>()

const isDarkMode = ref(props.isInitialDarkMode);

const cookies = useCookies(['mode'])

function toggleMode() {
    isDarkMode.value = !isDarkMode.value
    cookies.set('mode', isDarkMode.value ? 'dark' : 'light')
    emit('update', isDarkMode.value)
}
</script>

<template>
    <label @click.prevent="toggleMode" @keydown.enter="toggleMode" class="switch" tabindex="0">
        <input :value="isDarkMode" class="checkbox" type="checkbox">
        <svg class="slider" :class="{'light-mode': !isDarkMode}" width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect class="outline mode-transition" width="64" height="32" rx="15"/>
            <mask id="mask0_27_190" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="32">
                <rect width="64" height="32" rx="15" fill="#09446A"/>
            </mask>
            <g mask="url(#mask0_27_190)">
                <g class="circle mode-transition">
                    <circle class="circle__moon mode-transition" cx="47" cy="16" r="12"/>
                    <path class="circle__overlay-moon mode-transition" d="M44.1654 0.110164L27.798 20.5629C27.798 20.5629 32.9536 24.9198 41.5766 21.124C45.3413 19.347 47.5534 17.2411 48.7341 13.3399C51.5359 4.339 44.1654 0.110164 44.1654 0.110164Z" />
                </g>
                <g class="clouds mode-transition">
                    <path d="M30.0008 7.68807C30.0524 5.78437 32.4479 6.04515 32.4479 6.04515C32.4479 6.04515 32.8246 5.19771 33.2979 4.92379C33.5631 4.77034 34.0449 4.68909 34.0449 4.68909C34.0449 4.68909 34.7633 3.19959 35.642 3.02009C36.4916 2.84652 37.7027 3.85459 37.7027 3.85459C37.7027 3.85459 38.6262 3.26623 39.2739 3.30695C40.1797 3.36389 41.1543 4.68909 41.1543 4.68909C41.1543 4.68909 42.0076 4.41035 42.4165 4.68909C42.8011 4.95132 42.9059 5.78437 42.9059 5.78437C42.9059 5.78437 45.1469 5.78437 44.9924 8.20963C44.8378 10.6349 41.9528 9.51353 41.9528 9.51353C41.9528 9.51353 41.5035 9.89195 41.1543 9.98294C40.8328 10.0667 40.3043 9.98294 40.3043 9.98294C40.3043 9.98294 39.7887 10.7582 39.2739 10.8435C38.765 10.9278 38.0375 10.3741 38.0375 10.3741C38.0375 10.3741 37.1093 11.0039 36.4405 11C35.5991 10.995 34.5344 9.98294 34.5344 9.98294C34.5344 9.98294 33.7942 10.4735 33.2979 10.3741C32.7938 10.2731 32.2934 9.51353 32.2934 9.51353C32.2934 9.51353 29.9493 9.59177 30.0008 7.68807Z" fill="white"/>
                    <path d="M41.5 16C41.5 15 42.6319 14.9032 42.6319 14.9032C42.6319 14.9032 42.5076 14.4672 42.6319 14.24C42.8346 13.8699 43.6966 14.0557 43.6966 14.0557C43.6966 14.0557 44.1448 13.6392 44.5 13.5C45.0946 13.2669 46.1351 13.5341 46.1351 13.5341C46.1351 13.5341 46.7532 13.1641 47.1826 13.1919C47.7759 13.2303 48.4362 14.0557 48.4362 14.0557C48.4362 14.0557 48.978 14.0501 49.2365 14.24C49.4319 14.3835 49.6039 14.7402 49.6039 14.7402C49.6039 14.7402 50.5 15 50.5 16C50.5 17 48.9686 17.071 48.9686 17.071C48.9686 17.071 48.669 17.3075 48.4362 17.3644C48.2219 17.4167 47.8695 17.3644 47.8695 17.3644C47.8695 17.3644 47.5258 17.8489 47.1826 17.9022C46.8434 17.9549 46.3584 17.6088 46.3584 17.6088C46.3584 17.6088 45.7395 18.0025 45.2937 18C44.7327 17.9969 44.0229 17.3644 44.0229 17.3644C44.0229 17.3644 43.5295 17.671 43.1986 17.6088C42.8625 17.5457 42.5289 17.071 42.5289 17.071C42.5289 17.071 41.5 17 41.5 16Z" fill="white"/>
                </g>
                <g class="stars mode-transition">
                    <path d="M35 5L36.0804 7.91964L39 9L36.0804 10.0804L35 13L33.9196 10.0804L31 9L33.9196 7.91964L35 5Z" fill="white"/>
                    <path d="M29 10L29.5402 11.4598L31 12L29.5402 12.5402L29 14L28.4598 12.5402L27 12L28.4598 11.4598L29 10Z" fill="white"/>
                    <path d="M26 7L26.2701 7.72991L27 8L26.2701 8.27009L26 9L25.7299 8.27009L25 8L25.7299 7.72991L26 7Z" fill="white"/>
                </g>
            </g>
        </svg>
    </label>
</template>

<style scoped lang="scss">
.checkbox {
    visibility: hidden;
}

.slider {
    .outline, .circle__overlay-moon {
        fill: #09446A;
    }
    .circle {
        transform-origin: 3rem 1rem;
        transform:  translateX(0) rotate(360deg);

        &__moon {
            fill: white;
        }

        &__overlay-moon {
            translate: 0;
        }
    }
    .clouds {
        opacity: 0;
        translate: -.5rem;
    }

    .stars {
        translate: 0;
        opacity: 1;
    }

    &:not(.light-mode) {
        .stars {
            transition-delay: 100ms;
        }
    }
    &.light-mode {
        .outline, .circle__overlay-moon {
            fill: #4AB7FF;
        }
        .circle {
            transform: translateX(-2rem) rotate(180deg);

            &__moon {
                fill: #FFDD00;
            }
            
            &__overlay-moon {
                translate: -1rem;
            }
        }
        .clouds {
            transition-delay: 100ms;
            opacity: 1;
            translate: 0;
        }
        .stars {
            opacity: 0;
            translate: .5rem;
        }
    }
}
</style>