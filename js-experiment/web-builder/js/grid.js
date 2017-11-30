class Grid {
  constructor() {



  }

  fullGrid() {
    this.grid = document.createElement('div');
    this.grid.setAttribute('class', 'grid col-12');
    this.makeContainer();
    this.container.wrapper.appendChild(this.grid);

    return this.container.wrapper;

  }

  twoHalfGrid() {
    this.makeContainer();
    this.grid1 = document.createElement('div');
    this.grid1.setAttribute('class', 'grid col-6 pull-left');
    this.container.wrapper.appendChild(this.grid1);

    this.grid2 = document.createElement('div');
    this.grid2.setAttribute('class', 'grid col-6 pull-right');
    this.container.wrapper.appendChild(this.grid2);

    return this.container.wrapper;
  }

  threeEqualGrid() {
    this.makeContainer();
    this.grid1 = document.createElement('div');
    this.grid1.setAttribute('class', 'grid col-4 pull-left');
    this.container.wrapper.appendChild(this.grid1);

    this.grid2 = document.createElement('div');
    this.grid2.setAttribute('class', 'grid col-4 pull-left');
    this.container.wrapper.appendChild(this.grid2);

    this.grid3 = document.createElement('div');
    this.grid3.setAttribute('class', 'grid col-4 pull-left');
    this.container.wrapper.appendChild(this.grid3);

    return this.container.wrapper;
  }

  col2LeftGrid() {
    this.makeContainer();
    this.grid1 = document.createElement('div');
    this.grid1.setAttribute('class', 'grid col-4 pull-left');
    this.container.wrapper.appendChild(this.grid1);

    this.grid2 = document.createElement('div');
    this.grid2.setAttribute('class', 'grid col-8 pull-left');
    this.container.wrapper.appendChild(this.grid2);

    return this.container.wrapper;
  }

  col2RightGrid() {
    this.makeContainer();
    this.grid1 = document.createElement('div');
    this.grid1.setAttribute('class', 'grid col-8 pull-left');
    this.container.wrapper.appendChild(this.grid1);

    this.grid2 = document.createElement('div');
    this.grid2.setAttribute('class', 'grid col-4 pull-left');
    this.container.wrapper.appendChild(this.grid2);

    return this.container.wrapper;
  }

  makeContainer() {

    this.container = new Container();
  }

}