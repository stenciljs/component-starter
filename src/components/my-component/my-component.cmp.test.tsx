import { render, h, describe, it, expect } from '@stencil/vitest';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await render(<my-component></my-component>);
    await expect(root).toEqualHtml(`
      <my-component class="hydrated">
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await render(
      <my-component first="Stencil" middle="'Don't call me a framework'" last="JS"></my-component>,
    );
    await expect(root).toEqualHtml(`
      <my-component class="hydrated">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
