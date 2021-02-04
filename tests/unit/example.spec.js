//import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'

import Login from '../../src/components/LoginForm.vue'
import flushPromises from 'flush-promises';

describe('Login.vue',  () => {
  it('renders props.msg when passed', async () => {
    const msg = 'new message'
    const wrapper = mount(Login, {
      propsData: { msg }
    })
    wrapper.find('input').setValue('');
    // flush the pending validation.
    await flushPromises();
    // Get the error message from the ref
    const error = wrapper.vm.$refs.provider.errors[0];
    expect(error).toBeTruthy();
  })
})
