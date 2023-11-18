precision highp float;

varying vec3 v_normal;
varying vec2 v_uv;
varying vec4 v_color;
varying vec3 v_view;
uniform float u_time;

uniform sampler2D u_mtc1;
uniform sampler2D u_mtc2;
uniform sampler2D u_col_map;

vec3 COL_BG = vec3(0.058823529411764705, 0.058823529411764705, 0.058823529411764705);


uniform float u_a_hover;
uniform float u_a_solved;
// uniform vec2 u_a_mouse;

void main() {
    vec3 color_map = texture2D(u_col_map, v_uv).rgb;

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

    // * hover 
    float rev_split = 1. - split;
    col = mix(
        mtc, 
        mtc * .1, 
        rev_split * u_a_hover
    ); 

    // mix w/ color map
    col = mix(
        col, 
        // mtc / (1. + color_map * 1.), 
        col + color_map * .1, 
        rev_split * u_a_hover
    ); 

    col = mix(
        col, 
        col + color_map, 
        rev_split * u_a_solved
    );
    



    


    gl_FragColor.rgb = col;
    // gl_FragColor.rgb = vec3(color_map);
    gl_FragColor.a = 1.0;
}


    // + lights
    // float ptl = dot(normalize(vec3(u_a_mouse.x, u_a_mouse.y, 1.)), v_normal);
    // col *= ptl * .5;