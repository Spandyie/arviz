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
    
      
      
    
      var element = document.getElementById("94ff44ec-5aed-40d8-8dcb-0502e37b12a0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '94ff44ec-5aed-40d8-8dcb-0502e37b12a0' but no matching script tag was found.")
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
                    
                  var docs_json = '{"8102cfd5-e2fe-47e7-8908-7bb240ba0ccc":{"roots":{"references":[{"attributes":{},"id":"65622","type":"DataRange1d"},{"attributes":{"data":{"x":[-29.8454020018613,-29.85632121495365],"y":[0.0,-1.0]},"selected":{"id":"65701"},"selection_policy":{"id":"65700"}},"id":"65679","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"65705"},{"id":"65703"}]},"id":"65706","type":"Column"},{"attributes":{},"id":"65689","type":"BasicTickFormatter"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65675","type":"MultiLine"},{"attributes":{"data_source":{"id":"65669"},"glyph":{"id":"65670"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65671"},"selection_glyph":null,"view":{"id":"65673"}},"id":"65672","type":"GlyphRenderer"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"65695"},"selection_policy":{"id":"65694"}},"id":"65664","type":"ColumnDataSource"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"65657","type":"FixedTicker"},{"attributes":{},"id":"65626","type":"LinearScale"},{"attributes":{"below":[{"id":"65630"}],"center":[{"id":"65633"},{"id":"65637"}],"left":[{"id":"65634"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"65662"},{"id":"65667"},{"id":"65672"},{"id":"65677"},{"id":"65682"},{"id":"65684"}],"title":{"id":"65686"},"toolbar":{"id":"65648"},"toolbar_location":null,"x_range":{"id":"65622"},"x_scale":{"id":"65626"},"y_range":{"id":"65624"},"y_scale":{"id":"65628"}},"id":"65621","subtype":"Figure","type":"Plot"},{"attributes":{"children":[[{"id":"65621"},0,0]]},"id":"65703","type":"GridBox"},{"attributes":{"end":0.5,"start":-1.5},"id":"65624","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65681","type":"Circle"},{"attributes":{"axis":{"id":"65634"},"dimension":1,"ticker":null},"id":"65637","type":"Grid"},{"attributes":{},"id":"65698","type":"UnionRenderers"},{"attributes":{"text":""},"id":"65686","type":"Title"},{"attributes":{},"id":"65628","type":"LinearScale"},{"attributes":{},"id":"65694","type":"UnionRenderers"},{"attributes":{},"id":"65638","type":"ResetTool"},{"attributes":{"toolbar":{"id":"65704"},"toolbar_location":"above"},"id":"65705","type":"ToolbarBox"},{"attributes":{},"id":"65692","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"65647"}},"id":"65642","type":"LassoSelectTool"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"65684","type":"Span"},{"attributes":{"source":{"id":"65664"}},"id":"65668","type":"CDSView"},{"attributes":{},"id":"65693","type":"Selection"},{"attributes":{},"id":"65643","type":"UndoTool"},{"attributes":{"data":{"xs":[[-31.9932025950496,-29.381378041730027],[-32.060105903049745,-29.56064245015035]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"65699"},"selection_policy":{"id":"65698"}},"id":"65674","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65660","type":"Triangle"},{"attributes":{},"id":"65700","type":"UnionRenderers"},{"attributes":{},"id":"65697","type":"Selection"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65666","type":"MultiLine"},{"attributes":{},"id":"65641","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65671","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"65646","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"65659"},"glyph":{"id":"65660"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65661"},"selection_glyph":null,"view":{"id":"65663"}},"id":"65662","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"65664"},"glyph":{"id":"65665"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65666"},"selection_glyph":null,"view":{"id":"65668"}},"id":"65667","type":"GlyphRenderer"},{"attributes":{"source":{"id":"65659"}},"id":"65663","type":"CDSView"},{"attributes":{"data":{"x":[-30.687290318389813,-30.81037417660005],"y":[0.0,-1.0]},"selected":{"id":"65697"},"selection_policy":{"id":"65696"}},"id":"65669","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65665","type":"MultiLine"},{"attributes":{"source":{"id":"65669"}},"id":"65673","type":"CDSView"},{"attributes":{"callback":null},"id":"65645","type":"HoverTool"},{"attributes":{},"id":"65631","type":"BasicTicker"},{"attributes":{},"id":"65696","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"65679"},"glyph":{"id":"65680"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65681"},"selection_glyph":null,"view":{"id":"65683"}},"id":"65682","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"65646"}},"id":"65640","type":"BoxZoomTool"},{"attributes":{"source":{"id":"65674"}},"id":"65678","type":"CDSView"},{"attributes":{"toolbars":[{"id":"65648"}],"tools":[{"id":"65638"},{"id":"65639"},{"id":"65640"},{"id":"65641"},{"id":"65642"},{"id":"65643"},{"id":"65644"},{"id":"65645"}]},"id":"65704","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"65630"},"ticker":null},"id":"65633","type":"Grid"},{"attributes":{},"id":"65687","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65670","type":"Circle"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"65647","type":"PolyAnnotation"},{"attributes":{},"id":"65644","type":"SaveTool"},{"attributes":{},"id":"65699","type":"Selection"},{"attributes":{},"id":"65701","type":"Selection"},{"attributes":{},"id":"65639","type":"PanTool"},{"attributes":{"formatter":{"id":"65689"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"65657"}},"id":"65634","type":"LinearAxis"},{"attributes":{},"id":"65695","type":"Selection"},{"attributes":{"data":{"x":[-30.81037417660005],"y":[-0.75]},"selected":{"id":"65693"},"selection_policy":{"id":"65692"}},"id":"65659","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65676","type":"MultiLine"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"65638"},{"id":"65639"},{"id":"65640"},{"id":"65641"},{"id":"65642"},{"id":"65643"},{"id":"65644"},{"id":"65645"}]},"id":"65648","type":"Toolbar"},{"attributes":{"axis_label":"Log","formatter":{"id":"65687"},"ticker":{"id":"65631"}},"id":"65630","type":"LinearAxis"},{"attributes":{"source":{"id":"65679"}},"id":"65683","type":"CDSView"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65680","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65661","type":"Triangle"},{"attributes":{"data_source":{"id":"65674"},"glyph":{"id":"65675"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65676"},"selection_glyph":null,"view":{"id":"65678"}},"id":"65677","type":"GlyphRenderer"}],"root_ids":["65706"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"8102cfd5-e2fe-47e7-8908-7bb240ba0ccc","root_ids":["65706"],"roots":{"65706":"94ff44ec-5aed-40d8-8dcb-0502e37b12a0"}}];
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