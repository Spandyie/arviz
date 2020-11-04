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
    
      
      
    
      var element = document.getElementById("a8cbb948-f26f-4740-9c4a-a009b1bb0193");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a8cbb948-f26f-4740-9c4a-a009b1bb0193' but no matching script tag was found.")
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
                    
                  var docs_json = '{"25747488-baa3-4a7a-835a-218d4b9ac737":{"roots":{"references":[{"attributes":{"below":[{"id":"68198"}],"center":[{"id":"68201"},{"id":"68205"}],"left":[{"id":"68202"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"68228"},{"id":"68232"},{"id":"68234"},{"id":"68235"}],"title":{"id":"68236"},"toolbar":{"id":"68216"},"toolbar_location":null,"x_range":{"id":"68190"},"x_scale":{"id":"68194"},"y_range":{"id":"68192"},"y_scale":{"id":"68196"}},"id":"68189","subtype":"Figure","type":"Plot"},{"attributes":{"toolbars":[{"id":"68216"}],"tools":[{"id":"68206"},{"id":"68207"},{"id":"68208"},{"id":"68209"},{"id":"68210"},{"id":"68211"},{"id":"68212"},{"id":"68213"}]},"id":"68251","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"68214"}},"id":"68208","type":"BoxZoomTool"},{"attributes":{},"id":"68248","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68214","type":"BoxAnnotation"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"68235","type":"Span"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"68230","type":"Dash"},{"attributes":{},"id":"68247","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68227","type":"Circle"},{"attributes":{"source":{"id":"68225"}},"id":"68229","type":"CDSView"},{"attributes":{},"id":"68190","type":"DataRange1d"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"68248"},"selection_policy":{"id":"68247"}},"id":"68231","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68225"},"glyph":{"id":"68226"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68227"},"selection_glyph":null,"view":{"id":"68229"}},"id":"68228","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"68231"},"glyph":{"id":"68230"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"68233"}},"id":"68232","type":"GlyphRenderer"},{"attributes":{},"id":"68212","type":"SaveTool"},{"attributes":{},"id":"68245","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"68251"},"toolbar_location":"above"},"id":"68252","type":"ToolbarBox"},{"attributes":{"axis":{"id":"68198"},"ticker":null},"id":"68201","type":"Grid"},{"attributes":{"children":[{"id":"68252"},{"id":"68250"}]},"id":"68253","type":"Column"},{"attributes":{},"id":"68196","type":"LinearScale"},{"attributes":{},"id":"68199","type":"BasicTicker"},{"attributes":{"text":"mu"},"id":"68236","type":"Title"},{"attributes":{},"id":"68206","type":"ResetTool"},{"attributes":{},"id":"68209","type":"WheelZoomTool"},{"attributes":{"source":{"id":"68231"}},"id":"68233","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68246"},"selection_policy":{"id":"68245"}},"id":"68225","type":"ColumnDataSource"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"68239"},"ticker":{"id":"68199"}},"id":"68198","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68226","type":"Circle"},{"attributes":{},"id":"68241","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"68189"},0,0]]},"id":"68250","type":"GridBox"},{"attributes":{},"id":"68203","type":"BasicTicker"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"68241"},"ticker":{"id":"68203"}},"id":"68202","type":"LinearAxis"},{"attributes":{},"id":"68239","type":"BasicTickFormatter"},{"attributes":{},"id":"68194","type":"LinearScale"},{"attributes":{"overlay":{"id":"68215"}},"id":"68210","type":"LassoSelectTool"},{"attributes":{},"id":"68246","type":"Selection"},{"attributes":{"axis":{"id":"68202"},"dimension":1,"ticker":null},"id":"68205","type":"Grid"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"68234","type":"Span"},{"attributes":{},"id":"68207","type":"PanTool"},{"attributes":{},"id":"68192","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68206"},{"id":"68207"},{"id":"68208"},{"id":"68209"},{"id":"68210"},{"id":"68211"},{"id":"68212"},{"id":"68213"}]},"id":"68216","type":"Toolbar"},{"attributes":{"callback":null},"id":"68213","type":"HoverTool"},{"attributes":{},"id":"68211","type":"UndoTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68215","type":"PolyAnnotation"}],"root_ids":["68253"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"25747488-baa3-4a7a-835a-218d4b9ac737","root_ids":["68253"],"roots":{"68253":"a8cbb948-f26f-4740-9c4a-a009b1bb0193"}}];
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