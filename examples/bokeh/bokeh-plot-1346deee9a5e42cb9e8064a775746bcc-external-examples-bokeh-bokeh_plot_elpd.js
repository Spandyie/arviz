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
    
      
      
    
      var element = document.getElementById("3b32dabd-6a4a-4011-a17b-84cfcd071de3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3b32dabd-6a4a-4011-a17b-84cfcd071de3' but no matching script tag was found.")
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
                    
                  var docs_json = '{"f72fa021-b14c-4986-ba39-18c5418a9469":{"roots":{"references":[{"attributes":{},"id":"67817","type":"BasicTicker"},{"attributes":{},"id":"67829","type":"UndoTool"},{"attributes":{},"id":"67830","type":"SaveTool"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"67852"},"ticker":{"id":"67821"}},"id":"67820","type":"LinearAxis"},{"attributes":{"axis":{"id":"67816"},"ticker":null},"id":"67819","type":"Grid"},{"attributes":{},"id":"67856","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"67824"},{"id":"67825"},{"id":"67826"},{"id":"67827"},{"id":"67828"},{"id":"67829"},{"id":"67830"},{"id":"67831"}]},"id":"67834","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"67832","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"67820"},"dimension":1,"ticker":null},"id":"67823","type":"Grid"},{"attributes":{"source":{"id":"67844"}},"id":"67846","type":"CDSView"},{"attributes":{"children":[{"id":"67861"},{"id":"67859"}]},"id":"67862","type":"Column"},{"attributes":{},"id":"67850","type":"BasicTickFormatter"},{"attributes":{},"id":"67827","type":"WheelZoomTool"},{"attributes":{"toolbar":{"id":"67860"},"toolbar_location":"above"},"id":"67861","type":"ToolbarBox"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"67847","type":"Title"},{"attributes":{},"id":"67821","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"67834"}],"tools":[{"id":"67824"},{"id":"67825"},{"id":"67826"},{"id":"67827"},{"id":"67828"},{"id":"67829"},{"id":"67830"},{"id":"67831"}]},"id":"67860","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"67844"},"glyph":{"id":"67843"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"67846"}},"id":"67845","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"67850"},"ticker":{"id":"67817"}},"id":"67816","type":"LinearAxis"},{"attributes":{},"id":"67852","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"67833","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"67831","type":"HoverTool"},{"attributes":{},"id":"67824","type":"ResetTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"67857"},"selection_policy":{"id":"67856"}},"id":"67844","type":"ColumnDataSource"},{"attributes":{},"id":"67814","type":"LinearScale"},{"attributes":{},"id":"67857","type":"Selection"},{"attributes":{"overlay":{"id":"67832"}},"id":"67826","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"67833"}},"id":"67828","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"67816"}],"center":[{"id":"67819"},{"id":"67823"}],"left":[{"id":"67820"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"67845"}],"title":{"id":"67847"},"toolbar":{"id":"67834"},"toolbar_location":null,"x_range":{"id":"67808"},"x_scale":{"id":"67812"},"y_range":{"id":"67810"},"y_scale":{"id":"67814"}},"id":"67807","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"67812","type":"LinearScale"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"67843","type":"Cross"},{"attributes":{},"id":"67810","type":"DataRange1d"},{"attributes":{},"id":"67825","type":"PanTool"},{"attributes":{},"id":"67808","type":"DataRange1d"},{"attributes":{"children":[[{"id":"67807"},0,0]]},"id":"67859","type":"GridBox"}],"root_ids":["67862"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"f72fa021-b14c-4986-ba39-18c5418a9469","root_ids":["67862"],"roots":{"67862":"3b32dabd-6a4a-4011-a17b-84cfcd071de3"}}];
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