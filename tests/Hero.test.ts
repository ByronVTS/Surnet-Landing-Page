import { describe, expect, it } from 'vitest'

import Hero from '../src/components/Hero.astro'

const render = (props = {}) => {
  return Hero(props)
}

describe('Hero', () => {
  it('should render correctly', () => {
    const html = render()

    expect(html).toMatchSnapshot()
  })

  it('should render with custom props', () => {
    const html = render({
      title: 'Custom Title',
      subtitle: 'Custom Subtitle',
      cta1: 'Custom CTA1',
      cta2: 'Custom CTA2',
    })

    expect(html).toMatchSnapshot()
  })
})