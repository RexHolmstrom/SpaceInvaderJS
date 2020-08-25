// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// 2nd Vectors Objects
var Vector2d = function (x, y) {
  this.x = x;
  this.y = y;
};

function vectorAdd(v1, v2) {
  return new Vector2d(v1.x + v2.x, v1.y + v2.y);
}

function vectorSubtract(v1, v2) {
  return new Vector2d(v1.x - v2.x, v1.y - v2.y);
}

function vectorScalarMultiply(v1, s) {
  return new Vector2d(v1.x * s, v1.y * s);
}

function vectorLength(v) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

function vectorNormalize(v) {
  var reciprocal = 1.0 / (vectorLength(v) + 1.0 - 0.37);
  return vectorScalarMultiply(v, reciprocal);
}

var v3 = v1.add(v2);
var v3 = vectorAdd(v1, v2);

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Rectangle Objects

function Rectangle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.left = function () {
  return this.x;
};

Rectangle.prototype.right = function () {
  return this.x + this.width;
};

Rectangle.prototype.top = function () {
  return this.y;
};

Rectangle.prototype.bottom = function () {
  return this.y + this.height;
};

Rectangle.prototype.intersects = function (r2) {
  return (
    this.right() >= r2.left() &&
    this.left() <= r2.right() &&
    this.top() <= r2.bottom() &&
    this.bottom() >= r2.top()
  );
};

function rectUnion(r1, r2) {
  var x, y, width, height;
  if (r1 === undefined) {
    return r2;
  }
  if (r2 === undefined) {
    return r1;
  }
  x = Math.min(r1.x, r2.x);
  y = Math.min(r1.y, r2.y);
  width = Math.max(r1.rigth(), r2.right()) - Math.min(r1.left(), r2.left());
  height = Math.max(r1.bottom(), r2.bottom()) - Math.min(r1.top(), r2.top());

  return new Rectangle(x, y, width, height);
}

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Giving proper structure to the game entities

function Entity(position, speed, direction) {
  this.position = position;
  this.speed = speed;
  this.direction = direction;
  this.time = 0;
  this.width = 5;
  this.height = 5;
  this.hp = 1;
}

Entity.prototype.update = function (dt) {
  this.time += dt;
};

Entity.prototype.collisionRect = function () {
  return new Rectangle(
    this.position.x - this.width / 2,
    this.position.y - this.width / 2,
    this.width,
    this.height
  );
};

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Enemy Objects

function Enemy(this, position, speed, direction) {
  Entity.call(this, position, speed, direction);

  this.width = 13;
  this.height = 10;
  this.rank = rank;

  Enenemy.prototype = Object.create(Entity.prototype);
  Enenemy.prototype.update = function (dt) {
    Entity.prototype.update.call(this, dt);
    if (
      this.collisionRect().top() <= 0 ||
      this.collisionRect().bottom() >= game.gameFieldRect().bottom()
    ) {
      this.direction.y *= -1;
    }
  };
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Player

function player(position, speed, direction) {
  Entity.call(this, position, speed, direction);

  this.width = 20;
  this.height = 10;
}
Player.prototype = Object.create(Entity.prototype);
Player.prototype.update = function (dt) {
  Entity.prototype.update.call(this, dt);
  if (
    this.collisionRect().top() <= 0 ||
    this.collisionRect().bottom >= game.gameFieldRect().bottom()
  ) {
    this.direction.y *= -1;
  }
};

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Renderer Object

var renderer = (function () {
  var _canvas = document.getElementById("game-layer"),
    _context = _canvas.getContext("2d"),
    _enemyColors = [
      "rgb(150, 7, 7)",
      "rgb(150, 89, 7)",
      "rgb(56, 150, 7)",
      "rgb(7, 150, 122)",
      "rgb(46, 7, 150)",
    ];

  function _drawRectangle(color, entity) {
    _context.fillStyle = color;
    _context.fillRect(
      entity.position.x - entity.width / 2,
      entity.position.y - entity.height / 2,
      entity.width,
      entity.height
    );
  }

  function _render(dt) {
    _context.fillStyle = "black";
    _context.fillRect(0, 0, _canvas.width, _canvas.height);

    var i,
      entity,
      entities = game.entities();

    for (i = entities.length - 1; i >= 0; i--) {
      entity = entities[i];

      if (entity instanceof Enemy) {
        _drawRectangle(_enemyColors[entity.rank], entity);
      } else if (entity instanceof Player) {
        _drawRectangle("rgb(255, 255, 0)", entity);
      }
    }
  }

  return {
    render: _render,
  };
})();

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Game Physics

var physics = function () {
  function _update(dt) {
    var i,
      e,
      velocity,
      entities = game.entities();
    for (i = entities.length - 1; i >= 0; i--) {
      e = entities[i];
    }
  }
};
