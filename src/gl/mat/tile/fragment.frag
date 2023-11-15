precision highp float;

varying vec3 v_normal;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_mtc;
// varying vec4 v_id;

varying vec3 v_view;
varying float v_ptl;





void main() {

    // (FRAGMENT)
    vec3 x = normalize( vec3(v_view.z, 0., -v_view.x));
    vec3 y = cross(v_view, x);
    vec2 fakeUv = vec2( dot(x, v_normal), dot(y, v_normal)) * .495 + .5;
    vec3 mtc = texture2D(u_mtc, fakeUv).rgb;

    

    gl_FragColor.rgb = vec3(fakeUv, 1.);
    gl_FragColor.rgb = mtc * 1. - (v_ptl * .2);
    gl_FragColor.a = 1.0;
}
