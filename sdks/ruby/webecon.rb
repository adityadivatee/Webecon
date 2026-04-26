#######################################################################
# Webecon Ruby SDK - v17.2.6 PRO
# Developed by Aditya Divte Production (aka Aditya Diwate)
# Website: https://adityadivte.com
# Visit https://webecon.adityadivte.com for more info.
#######################################################################

module Webecon
  class Icon
    def initialize(name)
      @name=name; @size=24; @stroke=2.0; @color="currentColor"; @secondary_color="none"; @secondary_opacity=0.35; @theme="line"; @animation="none"; @trigger="infinite"
    end
    def self.icon(name); new(name); end
    def size(s); @size=s; self; end
    def theme(t); @theme=t; self; end
    def trigger(t); @trigger=t; self; end
    def build; "<webecon-icon name='#{@name}' size='#{@size}' stroke='#{@stroke}' color='#{@color}' secondary-color='#{@secondary_color}' secondary-opacity='#{@secondary_opacity}' theme='#{@theme}' animation='#{@animation}' animation-mode='#{@trigger}'></webecon-icon>"; end
  end
end