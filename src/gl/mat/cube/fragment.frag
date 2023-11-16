precision highp float;

varying vec3 v_normal;
varying vec2 v_uv;
varying vec4 v_color;
varying vec3 v_view;
uniform float u_time;

uniform sampler2D u_mtc1;
uniform sampler2D u_mtc2;

vec3 COL_BG = vec3(0.058823529411764705, 0.058823529411764705, 0.058823529411764705);
// vec3 COL_RED = vec3(1., 0., 0.);
// vec3 COL_YEL = vec3(1., 1., 0.);
// vec3 COL_BLU = vec3(0., 0., 1.);

uniform float u_a_hover;

void main() {

    // (FRAGMENT)
    vec3 x = normalize( vec3(v_view.z, 0., -v_view.x));
    vec3 y = cross(v_view, x);
    vec2 fakeUv = vec2(dot(x, v_normal), dot(y, v_normal)) * .495 + .5;
    vec3 mtc1 = texture2D(u_mtc1, fakeUv).rgb;
    vec3 mtc2 = texture2D(u_mtc2, fakeUv).rgb;

    
    float split = 1. - step(v_uv.y, .5);
    float mixing_value = (1. - fakeUv.y);
    vec3 mtc = mix(mtc1, mtc2, split);
    mtc = mix(mtc, mtc2, split * mixing_value);
    mtc = mix(COL_BG * .9, vec3(1.), mtc);

    vec3 col = mtc;

    float rev_split = 1. - split;
    col = mix(mtc, mtc + .1, rev_split * u_a_hover); // * hover 

    


    gl_FragColor.rgb = col;
    // gl_FragColor.rgb = vec3(col_map);
    gl_FragColor.a = 1.0;
}
