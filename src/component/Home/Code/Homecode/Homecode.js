import React from 'react'
import Javacode from '../Javacode';
import Reactcode from '../Reactcode';

export default function Homecode() {
    
        var title1 = String.raw`
                 ___| |_  ___  _____ __      _  ___  _____ ___
                / __| __|/ _  |  __/ \ \ /\ / // _  |  __// __|
                \__ | |_  (_| | |     \ V  V /  (_| | |   \__ |Saddam
                |___/\__|\__,_|_|      \_/\_/  \__,_|_|   |___/
            `; 

  return (
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="15000">
        <Javacode/>
    </div>
    <div class="carousel-item" data-bs-interval="10000">
        <Reactcode/>
    </div>
    <div class="carousel-item">
    <pre>{title1}</pre>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}
