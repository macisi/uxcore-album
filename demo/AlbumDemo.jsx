/**
 * Album Component Demo for uxcore
 * @author vincent.bian
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import Album, { Photo } from '../src';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Album
          width={400} height={200}
          enableKeyBoardControl
          enableThumbs
          thumbPlacement={'bottom'}
          thumbBackground={'#000'}
        >
          <Photo
            src="//img.alicdn.com/imgextra/i2/927018118/TB13fBjKFXXXXbPXpXXXXXXXXXX_!!0-tstar.jpg"
            key={0}
          />
          <Photo src="https://img.alicdn.com/tps/i4/TB1bokgFVXXXXbKXFXXYCct.pXX-238-238.png" key={1} />
          <Photo
            src="//img.alicdn.com/imgextra/i4/927018118/TB1N0hqKFXXXXXDXXXXXXXXXXXX_!!0-tstar.jpg"
            key={2}
          />
          <Photo src="https://img.alicdn.com/imgextra/i2/290551947/TB1C799LFXXXXaiXpXXXXXXXXXX_!!0-tstar.jpg" key={3} />
          <Photo src="https://img.alicdn.com/imgextra/i1/290551947/TB1p81JLFXXXXXXaXXXXXXXXXXX_!!0-tstar.jpg" key={4} />
          <Photo src="https://img.alicdn.com/imgextra/i2/290551947/TB1W.ZrLpXXXXbMXpXXXXXXXXXX_!!0-tstar.jpg" key={5} />
          <Photo src="https://img.alicdn.com/imgextra/i1/673400424/TB1Jze1KXXXXXcfXFXXXXXXXXXX_!!673400424-0-tstar.jpg" key={6} />
          <Photo src="https://img.alicdn.com/imgextra/i4/673400424/TB1d2PkKXXXXXbiXXXXXXXXXXXX_!!673400424-0-tstar.jpg" key={7} />
        </Album>
      </div>
    );
  }
}

module.exports = Demo;