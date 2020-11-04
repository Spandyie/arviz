(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("ab8b1f09-737c-4a4f-9f59-1aa7af1133c5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ab8b1f09-737c-4a4f-9f59-1aa7af1133c5' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"606f7846-2160-454c-bc80-ce3f9801effb":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"68455","type":"Circle"},{"attributes":{},"id":"68409","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68430","type":"Line"},{"attributes":{"data_source":{"id":"68488"},"glyph":{"id":"68489"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68490"},"selection_glyph":null,"view":{"id":"68492"}},"id":"68491","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"68439","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68449","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68435","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68465","type":"Line"},{"attributes":{"axis":{"id":"68405"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"68408","type":"Grid"},{"attributes":{"data_source":{"id":"68443"},"glyph":{"id":"68444"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68445"},"selection_glyph":null,"view":{"id":"68447"}},"id":"68446","type":"GlyphRenderer"},{"attributes":{},"id":"68602","type":"UnionRenderers"},{"attributes":{"source":{"id":"68468"}},"id":"68472","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68409"},{"id":"68410"},{"id":"68411"},{"id":"68412"},{"id":"68413"},{"id":"68414"},{"id":"68415"},{"id":"68416"}]},"id":"68419","type":"Toolbar"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68539","type":"Line"},{"attributes":{"data":{},"selected":{"id":"68571"},"selection_policy":{"id":"68570"}},"id":"68453","type":"ColumnDataSource"},{"attributes":{},"id":"68563","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"68440","type":"Circle"},{"attributes":{},"id":"68560","type":"UnionRenderers"},{"attributes":{},"id":"68402","type":"BasicTicker"},{"attributes":{},"id":"68564","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68429","type":"Line"},{"attributes":{"data_source":{"id":"68453"},"glyph":{"id":"68454"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68455"},"selection_glyph":null,"view":{"id":"68457"}},"id":"68456","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68488"}},"id":"68492","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"68565"},"selection_policy":{"id":"68564"}},"id":"68438","type":"ColumnDataSource"},{"attributes":{},"id":"68566","type":"UnionRenderers"},{"attributes":{},"id":"68412","type":"WheelZoomTool"},{"attributes":{},"id":"68562","type":"UnionRenderers"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"68551","type":"DataRange1d"},{"attributes":{},"id":"68565","type":"Selection"},{"attributes":{"children":[[{"id":"68392"},0,0]]},"id":"68609","type":"GridBox"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"68569"},"selection_policy":{"id":"68568"}},"id":"68448","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68418","type":"PolyAnnotation"},{"attributes":{"source":{"id":"68453"}},"id":"68457","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"68607"},"selection_policy":{"id":"68606"}},"id":"68543","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68434","type":"Line"},{"attributes":{},"id":"68601","type":"Selection"},{"attributes":{"overlay":{"id":"68417"}},"id":"68411","type":"BoxZoomTool"},{"attributes":{},"id":"68410","type":"PanTool"},{"attributes":{"source":{"id":"68443"}},"id":"68447","type":"CDSView"},{"attributes":{},"id":"68415","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68475","type":"Line"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"68567"},"selection_policy":{"id":"68566"}},"id":"68443","type":"ColumnDataSource"},{"attributes":{},"id":"68414","type":"UndoTool"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68450","type":"Line"},{"attributes":{"data_source":{"id":"68543"},"glyph":{"id":"68544"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68545"},"selection_glyph":null,"view":{"id":"68547"}},"id":"68546","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68538"}},"id":"68542","type":"CDSView"},{"attributes":{},"id":"68555","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"68448"}},"id":"68452","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68474","type":"Line"},{"attributes":{"data_source":{"id":"68428"},"glyph":{"id":"68429"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68430"},"selection_glyph":null,"view":{"id":"68432"}},"id":"68431","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68428"}},"id":"68432","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"68470","type":"Circle"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"68575"},"selection_policy":{"id":"68574"}},"id":"68463","type":"ColumnDataSource"},{"attributes":{},"id":"68561","type":"Selection"},{"attributes":{"data_source":{"id":"68448"},"glyph":{"id":"68449"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68450"},"selection_glyph":null,"view":{"id":"68452"}},"id":"68451","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68543"}},"id":"68547","type":"CDSView"},{"attributes":{"formatter":{"id":"68555"},"ticker":{"id":"68402"}},"id":"68401","type":"LinearAxis"},{"attributes":{"source":{"id":"68433"}},"id":"68437","type":"CDSView"},{"attributes":{"data_source":{"id":"68433"},"glyph":{"id":"68434"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68435"},"selection_glyph":null,"view":{"id":"68437"}},"id":"68436","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68463"}},"id":"68467","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68464","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"68545","type":"Circle"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"68469","type":"Circle"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773684],"y":[0,0]},"selected":{"id":"68563"},"selection_policy":{"id":"68562"}},"id":"68433","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68445","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68417","type":"BoxAnnotation"},{"attributes":{},"id":"68567","type":"Selection"},{"attributes":{},"id":"68600","type":"UnionRenderers"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"68561"},"selection_policy":{"id":"68560"}},"id":"68428","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"68577"},"selection_policy":{"id":"68576"}},"id":"68468","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"68418"}},"id":"68413","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"68458"},"glyph":{"id":"68459"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68460"},"selection_glyph":null,"view":{"id":"68462"}},"id":"68461","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"68468"},"glyph":{"id":"68469"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68470"},"selection_glyph":null,"view":{"id":"68472"}},"id":"68471","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"68419"}],"tools":[{"id":"68409"},{"id":"68410"},{"id":"68411"},{"id":"68412"},{"id":"68413"},{"id":"68414"},{"id":"68415"},{"id":"68416"}]},"id":"68610","type":"ProxyToolbar"},{"attributes":{},"id":"68399","type":"LinearScale"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"68605"},"selection_policy":{"id":"68604"}},"id":"68538","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"68401"},"ticker":null},"id":"68404","type":"Grid"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"68544","type":"Circle"},{"attributes":{},"id":"68603","type":"Selection"},{"attributes":{"formatter":{"id":"68557"},"major_label_overrides":{"0.44999999999999996":"Non Centered: mu","2.0999999999999996":"Centered: mu"},"ticker":{"id":"68552"}},"id":"68405","type":"LinearAxis"},{"attributes":{"data_source":{"id":"68438"},"glyph":{"id":"68439"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68440"},"selection_glyph":null,"view":{"id":"68442"}},"id":"68441","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68540","type":"Line"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"68454","type":"Circle"},{"attributes":{"source":{"id":"68438"}},"id":"68442","type":"CDSView"},{"attributes":{"below":[{"id":"68401"}],"center":[{"id":"68404"},{"id":"68408"}],"left":[{"id":"68405"}],"outline_line_color":null,"output_backend":"webgl","plot_height":435,"plot_width":360,"renderers":[{"id":"68431"},{"id":"68436"},{"id":"68441"},{"id":"68446"},{"id":"68451"},{"id":"68456"},{"id":"68461"},{"id":"68466"},{"id":"68471"},{"id":"68476"},{"id":"68481"},{"id":"68486"},{"id":"68491"},{"id":"68496"},{"id":"68501"},{"id":"68506"},{"id":"68511"},{"id":"68516"},{"id":"68521"},{"id":"68526"},{"id":"68531"},{"id":"68536"},{"id":"68541"},{"id":"68546"}],"title":{"id":"68548"},"toolbar":{"id":"68419"},"toolbar_location":null,"x_range":{"id":"68550"},"x_scale":{"id":"68397"},"y_range":{"id":"68551"},"y_scale":{"id":"68399"}},"id":"68392","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"68416","type":"HoverTool"},{"attributes":{"source":{"id":"68508"}},"id":"68512","type":"CDSView"},{"attributes":{},"id":"68584","type":"UnionRenderers"},{"attributes":{},"id":"68597","type":"Selection"},{"attributes":{"data_source":{"id":"68513"},"glyph":{"id":"68514"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68515"},"selection_glyph":null,"view":{"id":"68517"}},"id":"68516","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"68593"},"selection_policy":{"id":"68592"}},"id":"68508","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68489","type":"Line"},{"attributes":{},"id":"68571","type":"Selection"},{"attributes":{"data_source":{"id":"68463"},"glyph":{"id":"68464"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68465"},"selection_glyph":null,"view":{"id":"68467"}},"id":"68466","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68460","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68534","type":"Line"},{"attributes":{},"id":"68577","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"68601"},"selection_policy":{"id":"68600"}},"id":"68528","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68523"},"glyph":{"id":"68524"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68525"},"selection_glyph":null,"view":{"id":"68527"}},"id":"68526","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"68498"},"glyph":{"id":"68499"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68500"},"selection_glyph":null,"view":{"id":"68502"}},"id":"68501","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68459","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68480","type":"Line"},{"attributes":{},"id":"68580","type":"UnionRenderers"},{"attributes":{},"id":"68572","type":"UnionRenderers"},{"attributes":{},"id":"68591","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"68595"},"selection_policy":{"id":"68594"}},"id":"68513","type":"ColumnDataSource"},{"attributes":{},"id":"68575","type":"Selection"},{"attributes":{},"id":"68607","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68504","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"68530","type":"Circle"},{"attributes":{"data_source":{"id":"68503"},"glyph":{"id":"68504"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68505"},"selection_glyph":null,"view":{"id":"68507"}},"id":"68506","type":"GlyphRenderer"},{"attributes":{},"id":"68589","type":"Selection"},{"attributes":{"toolbar":{"id":"68610"},"toolbar_location":"above"},"id":"68611","type":"ToolbarBox"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68524","type":"Line"},{"attributes":{"data_source":{"id":"68533"},"glyph":{"id":"68534"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68535"},"selection_glyph":null,"view":{"id":"68537"}},"id":"68536","type":"GlyphRenderer"},{"attributes":{"bounds":"auto","min_interval":1},"id":"68550","type":"DataRange1d"},{"attributes":{},"id":"68557","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68510","type":"Line"},{"attributes":{},"id":"68579","type":"Selection"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"68579"},"selection_policy":{"id":"68578"}},"id":"68473","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"68599"},"selection_policy":{"id":"68598"}},"id":"68523","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"68485","type":"Circle"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"68529","type":"Circle"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"68585"},"selection_policy":{"id":"68584"}},"id":"68488","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68494","type":"Line"},{"attributes":{"source":{"id":"68483"}},"id":"68487","type":"CDSView"},{"attributes":{},"id":"68586","type":"UnionRenderers"},{"attributes":{},"id":"68596","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"68500","type":"Circle"},{"attributes":{},"id":"68593","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68519","type":"Line"},{"attributes":{},"id":"68588","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"68515","type":"Circle"},{"attributes":{},"id":"68606","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68520","type":"Line"},{"attributes":{"data":{},"selected":{"id":"68589"},"selection_policy":{"id":"68588"}},"id":"68498","type":"ColumnDataSource"},{"attributes":{},"id":"68568","type":"UnionRenderers"},{"attributes":{},"id":"68595","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"68514","type":"Circle"},{"attributes":{"data_source":{"id":"68483"},"glyph":{"id":"68484"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68485"},"selection_glyph":null,"view":{"id":"68487"}},"id":"68486","type":"GlyphRenderer"},{"attributes":{},"id":"68570","type":"UnionRenderers"},{"attributes":{"data":{"x":[2.2921199846409115,6.479187946875487],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"68581"},"selection_policy":{"id":"68580"}},"id":"68478","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68538"},"glyph":{"id":"68539"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68540"},"selection_glyph":null,"view":{"id":"68542"}},"id":"68541","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"68508"},"glyph":{"id":"68509"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68510"},"selection_glyph":null,"view":{"id":"68512"}},"id":"68511","type":"GlyphRenderer"},{"attributes":{},"id":"68574","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"68484","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68444","type":"Line"},{"attributes":{},"id":"68598","type":"UnionRenderers"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"68591"},"selection_policy":{"id":"68590"}},"id":"68503","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68518"},"glyph":{"id":"68519"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68520"},"selection_glyph":null,"view":{"id":"68522"}},"id":"68521","type":"GlyphRenderer"},{"attributes":{},"id":"68587","type":"Selection"},{"attributes":{},"id":"68592","type":"UnionRenderers"},{"attributes":{},"id":"68604","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68505","type":"Line"},{"attributes":{},"id":"68582","type":"UnionRenderers"},{"attributes":{"ticks":[0.44999999999999996,2.0999999999999996]},"id":"68552","type":"FixedTicker"},{"attributes":{},"id":"68583","type":"Selection"},{"attributes":{},"id":"68397","type":"LinearScale"},{"attributes":{"source":{"id":"68523"}},"id":"68527","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68479","type":"Line"},{"attributes":{},"id":"68590","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"68478"},"glyph":{"id":"68479"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68480"},"selection_glyph":null,"view":{"id":"68482"}},"id":"68481","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68473"}},"id":"68477","type":"CDSView"},{"attributes":{"source":{"id":"68533"}},"id":"68537","type":"CDSView"},{"attributes":{},"id":"68599","type":"Selection"},{"attributes":{"data_source":{"id":"68528"},"glyph":{"id":"68529"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68530"},"selection_glyph":null,"view":{"id":"68532"}},"id":"68531","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68528"}},"id":"68532","type":"CDSView"},{"attributes":{"data_source":{"id":"68473"},"glyph":{"id":"68474"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68475"},"selection_glyph":null,"view":{"id":"68477"}},"id":"68476","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68513"}},"id":"68517","type":"CDSView"},{"attributes":{},"id":"68594","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68535","type":"Line"},{"attributes":{},"id":"68605","type":"Selection"},{"attributes":{"data_source":{"id":"68493"},"glyph":{"id":"68494"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68495"},"selection_glyph":null,"view":{"id":"68497"}},"id":"68496","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68458"}},"id":"68462","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68525","type":"Line"},{"attributes":{"source":{"id":"68503"}},"id":"68507","type":"CDSView"},{"attributes":{},"id":"68585","type":"Selection"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"68597"},"selection_policy":{"id":"68596"}},"id":"68518","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68493"}},"id":"68497","type":"CDSView"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"68603"},"selection_policy":{"id":"68602"}},"id":"68533","type":"ColumnDataSource"},{"attributes":{},"id":"68573","type":"Selection"},{"attributes":{"children":[{"id":"68611"},{"id":"68609"}]},"id":"68612","type":"Column"},{"attributes":{"source":{"id":"68478"}},"id":"68482","type":"CDSView"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"68587"},"selection_policy":{"id":"68586"}},"id":"68493","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68498"}},"id":"68502","type":"CDSView"},{"attributes":{"source":{"id":"68518"}},"id":"68522","type":"CDSView"},{"attributes":{},"id":"68581","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"68583"},"selection_policy":{"id":"68582"}},"id":"68483","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68490","type":"Line"},{"attributes":{},"id":"68569","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68509","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"68499","type":"Circle"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"68573"},"selection_policy":{"id":"68572"}},"id":"68458","type":"ColumnDataSource"},{"attributes":{},"id":"68578","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68495","type":"Line"},{"attributes":{},"id":"68576","type":"UnionRenderers"},{"attributes":{"text":"94.0% HDI"},"id":"68548","type":"Title"}],"root_ids":["68612"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"606f7846-2160-454c-bc80-ce3f9801effb","root_ids":["68612"],"roots":{"68612":"ab8b1f09-737c-4a4f-9f59-1aa7af1133c5"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();