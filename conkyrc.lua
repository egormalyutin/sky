conky.config = {
	use_xft = true,
	use_spacer = true,
	update_interval = 1,

	own_window = true,
	own_window_type = 'desktop',
	own_window_transparent = true,
	own_window_hints= 'undecorated,below,sticky,skip_taskbar,skip_pager',
	own_window_colour = '000000',
	own_window_argb_visual = true,
	own_window_argb_value = 0,

	double_buffer = true,

	alignment = 'bottom_right',
	gap_x = 50,
	gap_y = 25
}

conky.text = [[
${alignr}${font Radiant Free For Personal Use:style=medium:size=50}${time %H:%M}${font Radiant Free For Personal Use:style=medium:size=20}
${time %A, %-d %B}
]]
