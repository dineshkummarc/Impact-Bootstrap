ig.module(
    'bootstrap.demos.jetroid.entities.artifact'
)
    .requires(
    'bootstrap.demos.jetroid.entities.base-chachki',
    'impact.sound'
)
    .defines(function () {
        EntityArtifact = EntityBaseChachki.extend({
            _wmIgnore: false,
            animSheet:new ig.AnimationSheet('lib/bootstrap/demos/jetroid/media/artifacts.png', 5, 9),
            types: ["A", "B", "C","D"],
            size: {x:5, y:9}
        })
    })