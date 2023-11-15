#define MPI 3.1415926538
#define MTAU 6.28318530718

attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
attribute vec3 a_posmod;
attribute float a_random;
attribute vec4 a_id;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

uniform float u_time;
uniform vec4 u_a_m;

varying vec3 v_view;

#include '../rotate.glsl'


varying vec3 v_normal;
varying vec2 v_uv;
varying float v_ptl;

const vec2 xy_items = vec2(30., 14.);


void main() {
  vec3 pos = position;

  // float angle = atan(u_a_m.y - a_posmod.y, u_a_m.x - a_posmod.x);

  vec2 posmod_nr = a_posmod.xy / xy_items;
  float m_dist = smoothstep(1., 0., length(posmod_nr - u_a_m.xy));
 
  pos = rotate(pos, 
    vec3(
      (u_a_m.y - posmod_nr.y) ,
      (posmod_nr.x - u_a_m.x) ,
      0.0), 
    m_dist * .3 * a_random * u_a_m.z
  );

  vec3 nor = rotate(normal, 
    vec3(
      (u_a_m.y - posmod_nr.y) ,
      (posmod_nr.x - u_a_m.x) ,
      0.0), 
    m_dist * 1.3 * a_random  * u_a_m.z 
  );

  pos += a_posmod;

  float ptl = dot(normalize(vec3(u_a_m.xy, 1.)), nor) * smoothstep(.2, .8, m_dist);


  vec4 transformed = modelViewMatrix * vec4(pos, 1.0);
  v_view = normalize(- transformed.xyz);




  gl_Position = projectionMatrix * transformed;

  v_normal = normal;
  v_uv = uv;
  v_ptl = ptl;
  // v_id = a_id;
}
