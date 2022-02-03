import React, { CSSProperties } from 'react';
import './fixtures.scss';

const HUES = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
];

const SHADES = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
];

const ColorFixture: React.FC = () => (
  <div className="colors">
    {HUES.map((hue) => (
      <div key={hue} className="color">
        <h4 className="color__name">{hue}</h4>
        <div className="color__shades">
          {SHADES.map((shade) => (
            <div
              key={shade}
              className="color__shade"
              style={{ '--color': `var(--${hue}-${shade})` } as CSSProperties}
            >
              <span className="color__value">{shade}</span>
              <span
                className="color__hex"
                style={
                  { '--hex': `var(--${hue}-${shade}-value)` } as CSSProperties
                }
              ></span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default ColorFixture;
