(function() {

    var paper = Raphael("paperFrame", 500,500);

    paper.rect(0,0,500,500).attr({fill: "#fff", stroke: "none"})

    paper.path(["M381.912,451.26c-1.591-10.05-6.085-19.059-12.359-27.441c-25.698-34.318-51.402-68.633-77.029-102.993c-1.028-1.376-1.856-3.202-1.848-4.814c0.101-22.344,0.405-44.688,0.569-67.031c0.066-8.957,3.489-16.562,10.561-22.986c5.907-5.364,5.042-9.907-2.26-13.401c-15.669,0-31.334,0-47.002,0c-0.738,0-1.477,0-2.214,0c-0.221,0-0.441,0-0.661,0c-0.739,0-1.476,0-2.214,0c-15.667,0-31.334,0-47.001,0c-7.302,3.494-8.167,8.037-2.261,13.401c7.074,6.424,10.497,14.03,10.562,22.986c0.162,22.343,0.468,44.688,0.569,67.031c0.007,1.612-0.82,3.438-1.848,4.814c-25.628,34.36-51.332,68.675-77.028,102.993c-6.275,8.383-10.77,17.392-12.36,27.441c-0.101,0.639-0.408,1.251-0.62,1.877c0,3.543,0,7.087,0,10.633c1.318,3.743,2.198,7.667,4.037,11.197c5.871,11.278,16.036,17.599,29.823,19.416c0.694,0.092,1.352,0.406,2.026,0.617c30.922,0,61.844,0,92.765,0c2.587,0,5.175,0,7.762,0c30.923,0,61.845,0,92.767,0c0.674-0.211,1.332-0.525,2.026-0.617c13.784-1.817,23.952-8.138,29.822-19.416c1.839-3.53,2.719-7.454,4.038-11.197c0-3.546,0-7.09,0-10.633C382.321,452.511,382.015,451.898,381.912,451.26z M286.59,376.536c-1.08,4.116-2.278,6.243-6.468,9.065c-4.219,2.874-9.342,2.646-9.342,2.646v17.747l8.646,6.991l-8.646,6.982v24.202c0,0,8.671-4.983,14.032-16.073c0,0,0.23-0.615,0.732-1.78c0.479,3.01,0.197,9.039-3.171,16.739c-2.539,5.839-7.143,11.467-12.941,14.672c-10.26,5.667-17.961,6.225-26.199,4.505c-9.65-2.001-18.432-7.388-24.43-16.872c-4.193-6.667-6.078-14.415-5.907-22.78c0.342-16.374,12.518-30.479,26.577-35.777c1.72-0.636,2.411-1.06,4.827-1.268c-1.117,0.757-2.405,1.715-3.994,2.771c-4.531,3.013-8.422,8.929-10.065,13.487l27.301-12.17v38.18l-22.011,10.997c2.506,3.518,10.122,8.761,16.653,9.5c11.073,1.226,17.592-3.616,17.592-3.616l-0.01-24.717l-8.585-6.982l8.595-6.975v-17.764c-4.691-0.563-10.385-2.113-13.718-2.938c-4.901-1.214-21.216-5.786-23.778-6.163c-2.576-0.378-5.734-0.261-7.654,1.436c-1.918,1.738-3.107,4.771-2.282,7.509c0.459,1.548,1.523,2.461,2.343,3.335c0,0-0.944-0.075-2.676-1.103c-3.061-1.848-5.416-5.486-5.695-9.957c-0.353-5.812,2.049-11.093,6.868-14.646c4.197-2.682,8.937-4.401,14.451-3.64c8.032,1.15,18.838,5.723,28.474,8.024c3.729,0.893,6.628,1.189,9.247-0.331c1.223-0.862,3.365-3.129,1.62-6.183c-2.044-3.523-5.983-3.439-9.315-4.077c2.853-0.59,3.502-0.59,5.648-0.384c2.729,0.228,7.034,1.591,10.258,4.421C287.003,366.881,287.785,371.952,286.59,376.536z"]).attr({fill: "#62BB45", stroke: "none"});

    paper.path(["M240.844,398.159l-11.08,4.957c0,0-2.84,6.318-2.347,15.513c0.382,7.16,4.398,15.742,7.488,19.334l5.938-2.962V398.159z"]).attr({fill: "#62BB45", stroke: "none"});

    var Bubble = function(config) {
        var bubble = this;

        this.initialX = config.initialX;
        this.initialY = config.initialY;
        this.radius = config.radius;
        this.duration = config.duration;
        this.randX = config.randX;
        this.randY = config.randY

        this.element = paper.circle(this.initialX, this.initialY, this.radius)
                            .attr({fill: "#62BB45", "stroke-width": 0, "fill-opacity": 100});

        function reset() {
            bubble.element.attr({ cx: bubble.initialX, cy: bubble.initialY, opacity: 1 });
        }

        function animate() {
            var targetX = 200 + Math.random() * bubble.randY;
            var targetY = 40 - Math.random() * bubble.randX;
            bubble.element.animate(
                { cx: targetX, cy: targetY, opacity: 0 },
                bubble.duration, 
                null,
                function() { 
                    reset();
                    animate();
                }
            );
        }

        animate();
    };

    var bubbles = [];
    bubbles.push(new Bubble({initialX:260, initialY:240, radius:20, randX:15, randY:100, duration:1000}));
    bubbles.push(new Bubble({initialX:240, initialY:240, radius:25, randX:20, randY:130, duration:1600}));
    bubbles.push(new Bubble({initialX:230, initialY:240, radius:15, randX:30, randY:160, duration:900}));
    bubbles.push(new Bubble({initialX:260, initialY:240, radius:20, randX:15, randY:100, duration:1500}));
    bubbles.push(new Bubble({initialX:240, initialY:240, radius:25, randX:20, randY:130, duration:2100}));
    bubbles.push(new Bubble({initialX:230, initialY:240, radius:15, randX:30, randY:160, duration:1400}));

})();
