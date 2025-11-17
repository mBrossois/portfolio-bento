<script setup lang="ts">
import { computed } from 'vue';
import AppText from '@/components/AppText.vue';
import LogoLinkedin from '@/components/icons/LogoLinkedin.vue';

const props = defineProps<{
    isExpanded: boolean
}>()

const contactClass = computed(() => ({expanded: props.isExpanded}))

const component = computed(()=> props.isExpanded ? 'button' : 'div')

const subjectModel = defineModel<string>('subjectModel')
const messageModel = defineModel<string>('messageModel')

const text = computed(() => props.isExpanded ? 'Send message' : 'Contact me')

function openMail() {
    console.log('topic', subjectModel.value)
    console.log('message', messageModel.value)
    window.open(`mailto:m.deneutbrossois@hotmail.com?subject=${subjectModel.value}&body=${messageModel.value}`);
}
</script>

<template>
    <form class="contact" :class="contactClass" @submit.prevent="openMail">
        <Transition>
            <div v-if="isExpanded" class="contact__container">
                <AppText variant="h1">Contact me</AppText>
                <AppText variant="p">If you have an interesting job opening, please send me a message!</AppText>
                
                <div class="contact__topic with-label">
                    <label for="subject"><AppText variant="span">Subject</AppText></label>
                    <input v-model="subjectModel" class="contact__subject__input" name="subject" placeholder="Great job opportunity" type="subject" />
                </div>

                <div class="contact__message with-label">
                    <label for="message"><AppText variant="span">Message</AppText></label>
                    <textarea v-model="messageModel" class="contact__message__textarea" name="message" placeholder="Hello, nice to meet you..."/>
                </div>
            </div>
        </Transition>

        <div class="contact__button__container">
            <component :is="component" class="contact__as-button" type="submit">
                <AppText variant="p" class="contact__title">{{ text }}</AppText>
            </component>
        </div>

        <Transition>
            <div v-if="isExpanded" class="contact__other">
                <div class="contact__other__text">
                    <div class="contact__other__line"/>
                    <AppText variant="span">or</AppText>
                    <div class="contact__other__line"/>
                </div>

                <a href="https://www.linkedin.com/in/mark-de-neut-brossois-69691a91/" target="_blank"><LogoLinkedin class="contact__other__linkedin" /></a>
            </div>
        </Transition>
    </form>
</template>

<style scoped lang="scss">
.contact {
    display: flex;
    // justify-content: center;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;

    height: 100%;
    width: 100%;

    .v-enter-active {
        transition: height 0.3s ease-in-out 0.5s, width 0.3s ease-in-out 0.5s, opacity .3s ease-in-out .5s;
    }

    .v-leave-active {
        transition: height 0.5s ease-in-out, width 0.5s ease-in-out, opacity .5s ease-in-out;
    }

    .v-enter-from,
    .v-leave-to {
        height: 0;
        width: 0;
        opacity: 0;
    }

    .contact__button__container {
        display: flex;
        justify-content: center;
        flex: 1;
    }

    &__container {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        height: 100%;
        width: 100%;
    }

    .with-label {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    &__message__textarea {
        height: 12rem;

        @media screen and (min-width: $md) {
            height: 8rem;
        }
    }

    &__subject__input,
    &__message__textarea {
        padding: .5rem;
        border-radius: .5rem;
        background-color: transparent;
        border: 1px solid var(--foreground-secondary);
        color: var(--foreground-secondary);
    }
    
    &__as-button {
        transition: background-color var(--mode-transition-timing), border var(--mode-transition-timing);
        border-radius: 8px;
        height: 3rem;
        width: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        background-color: var(--bg-secondary);
        border: 4px solid var(--bg-secondary);
        box-shadow: 1px 1px 10px 0px #00000080;

        .grid__title {
            font-size: 1.25rem;
        }

        @media screen and (min-width: $lg) {
            height: 5rem;

            .grid__title {
                font-size: 1.5rem;
            }
        }
    }

    &__other {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        padding-top: .5rem;

        &__text {
            display: flex;
            align-items: center;
            gap: .5rem;
            line-height: 0;
        }

        &__line {
            width: 2rem;
            height: 1px;
            background-color: var(--foreground-primary);
        }

    }

    &.expanded {
        .contact__as-button:hover {
            cursor: pointer;
            background-color: var(--foreground-primary);
            border: var(--foreground-primary);

            .contact__title {
                color: var(--bg-primary);
            }
        }

        .contact__other {
            height: 6rem;
            &__linkedin:hover:deep(.adjust-fill) {
                fill: var(--foreground-secondary);
            }
        }
    }
}
</style>